const Particles = (target: string) => {
  const canvas = document.getElementById(target) as HTMLCanvasElement;
  const ctx = canvas?.getContext("2d");

  let nb = 0;
  let speckArray = [];
  let speckColor = "239, 239, 239";
  let speckConnectColor = "0, 255, 240";
  let speckConnectWidth = 0.1;
  let speckConnectRadius = 200;
  let speckConnectDistance = 100;
  let mouseX;
  let mouseY;

  const animate = animateSpecks();
  createSpecks(animate);
  detectMouse();
  detectResize();

  function Speck(radius, x, y, vx, vy) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }

  Speck.prototype.update = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgb(" + speckColor + ")";
    ctx.fill();

    if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
    if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

    this.x += this.vx;
    this.y += this.vy;

    for (let i = 0; i < nb; i++) {
      const that = speckArray[i];
      const location = Math.sqrt(
        Math.pow(this.x - mouseX, 2) + Math.pow(this.y - mouseY, 2)
      );
      const distance = Math.sqrt(
        Math.pow(this.x - that.x, 2) + Math.pow(this.y - that.y, 2)
      );
      const connectOpacity = 1 - distance / speckConnectDistance;

      if (location <= speckConnectRadius && distance <= speckConnectDistance) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(that.x, that.y);
        ctx.strokeStyle =
          "rgba(" + speckConnectColor + "," + connectOpacity + ")";
        ctx.lineWidth = speckConnectWidth;
        ctx.stroke();
      }
    }
  };

  function createSpecks(animate) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    nb = Math.round(canvas.width * canvas.height * (2 / 10000));
    speckArray = [];

    for (let i = 0; i < nb; i++) {
      const radius = Math.random();
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const vx = -0.5 + Math.random();
      const vy = -0.5 + Math.random();

      const createSpeck = new Speck(radius, x, y, vx, vy);
      speckArray.push(createSpeck);
    }

    if (animate) animate;
  }

  function drawSpecks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < nb; i++) {
      let speck = speckArray[i];
      speck.update();
    }

    window.requestAnimationFrame(() => {
      drawSpecks();
    });
  }

  function animateSpecks() {
    window.requestAnimationFrame(() => {
      drawSpecks();
    });
  }

  function detectMouse() {
    canvas.addEventListener("mousemove", (canvasPosition) => {
      mouseX = canvasPosition.pageX;
      mouseY = canvasPosition.pageY - window.scrollY;
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
        documentWidth = document.width;
        documentHeight = document.height;
        createSpecks();
      }
    });
  }
}

export default Particles;