const hexToRGB = (hex: `#${string}`): string => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const longHex = hex?.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(longHex);

  return !!result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "255, 255, 255";
};

interface Options {
  target?: string,
  color?: `#${string}`,
  density?: number,
  connect?: {
    color?: `#${string}`,
    distance?: number,
    radius?: number,
    width?: number,
  }
}

interface Particle {
  radius: number,
  x: number,
  y: number,
  vx: number,
  vy: number,
  update: () => void
}

export const Particles = (options?: Options) => {
  const canvas = document.getElementById(options?.target ? options?.target : 'particles') as HTMLCanvasElement;
  const ctx = canvas?.getContext("2d");

  const particleColor = hexToRGB(options?.color || "#ffffff");
  const particleDensity = options?.density || 20;
  const particleConnectColor = hexToRGB(options?.connect?.color || "#ffffff");
  const particleConnectDistance = options?.connect?.distance || 100;
  const particleConnectRadius = options?.connect?.radius || 200;
  const particleConnectWidth = options?.connect?.width || 0.25;

  let nb = 0;
  let particleArray: Particle[] = [];
  let mouseX: number;
  let mouseY: number;
  let animationId: number;
  
  createParticles();
  detectMouse();
  detectResize();

  function Particle(this: Particle, radius: number, x: number, y: number, vx: number, vy: number) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }

  Particle.prototype.update = function() {
    if (!!ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = "rgb(" + particleColor + ")";
      ctx.fill();

      if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
      if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

      this.x += this.vx;
      this.y += this.vy;

      for (let i = 0; i < nb; i++) {
        const that = particleArray[i];
        const location = Math.sqrt(
          Math.pow(this.x - mouseX, 2) + Math.pow(this.y - mouseY, 2)
        );
        const distance = Math.sqrt(
          Math.pow(this.x - that.x, 2) + Math.pow(this.y - that.y, 2)
        );
        const connectOpacity = 1 - distance / particleConnectDistance;

        if (location <= particleConnectRadius && distance <= particleConnectDistance) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(that.x, that.y);
          ctx.strokeStyle =
            "rgba(" + particleConnectColor + "," + connectOpacity + ")";
          ctx.lineWidth = particleConnectWidth;
          ctx.stroke();
        }
      }
    }
  };

  function createParticles() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    nb = Math.round(canvas.width * canvas.height * (particleDensity / 100000));
    particleArray = [];

    for (let i = 0; i < nb; i++) {
      const radius = Math.random();
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const vx = -0.5 + Math.random();
      const vy = -0.5 + Math.random();

      const newParticle = new (Particle as any)(radius, x, y, vx, vy);
      particleArray.push(newParticle);
    }

    animationId = window.requestAnimationFrame(animateParticles);
  }

  function animateParticles() {
    ctx?.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < nb; i++) {
      let particle = particleArray[i];
      particle.update();
    }

    animationId = window.requestAnimationFrame(animateParticles);
  }

  function detectMouse() {
    window.addEventListener("mousemove", (mousePosition) => {
      mouseX = mousePosition.pageX;
      mouseY = mousePosition.pageY - window.scrollY;
    });
  }

  function detectResize() {
    let documentWidth = document.body.clientWidth;
    let documentHeight = document.body.clientHeight;

    console.log(documentWidth);
    console.log(documentHeight);
    window.addEventListener("resize", () => {
      if (
        documentWidth !== document.body.clientWidth ||
        documentHeight !== document.body.clientHeight
      ) {
        documentWidth = document.body.clientWidth;
        documentHeight = document.body.clientHeight;
        cancelAnimationFrame(animationId);
        createParticles();
      }
    });
  }
}

export default Particles;