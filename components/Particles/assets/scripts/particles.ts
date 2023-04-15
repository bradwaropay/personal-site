import { hexToRGB } from '~/assets/scripts/utils'

let particleCanvas: HTMLCanvasElement;
let particleCtx: CanvasRenderingContext2D;
let connectCanvas: HTMLCanvasElement;
let connectCtx: CanvasRenderingContext2D;
let options: Options;
let particleArray = <Particle[]>[];
let animationId: number;
let mouseX: number;
let mouseY: number;

export class Particle {
  radius: number;
  x: number;
  y: number;
  vx: number;
  vy: number;

  constructor(radius: number, x: number, y: number, vx: number, vy: number) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  };

  move(options: ParticleOptions) {
    particleCtx.beginPath();
    particleCtx.arc(this.x, this.y, this.radius * options.size, 0, Math.PI * 2, false);
    particleCtx.fillStyle = `rgb(${hexToRGB(options.color)})`;
    particleCtx.fill();

    if (this.x < 0 || this.x > particleCanvas.width) this.vx = -this.vx;
    if (this.y < 0 || this.y > particleCanvas.height) this.vy = -this.vy;

    this.x += this.vx * options.velocity;
    this.y += this.vy * options.velocity;
  };

  connect(options: ConnectOptions) {
    for (let i = particleArray.length; i > 0; i--) {
      const that = particleArray[particleArray.length - i];
      const location = Math.sqrt(Math.pow(this.x - mouseX, 2) + Math.pow(this.y - mouseY, 2));
      const distance = Math.sqrt(Math.pow(this.x - that.x, 2) + Math.pow(this.y - that.y, 2));
      const connectOpacity = 1 - distance / options.distance;

      const locationDetection = location <= options.detectRadius;
      const distanceDetection = distance <= options.distance;
      const detection = parseInt(options.detectRadius.toString()) === 0 ? distanceDetection : locationDetection && distanceDetection;

      if (detection) {
        connectCtx.beginPath();
        connectCtx.moveTo(this.x, this.y);
        connectCtx.lineTo(that.x, that.y);
        connectCtx.strokeStyle = `rgba(${hexToRGB(options.color)},${connectOpacity})`;
        connectCtx.lineWidth = options.width;
        connectCtx.stroke();
      }
    }
  };
};

export const createParticles = () => {
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
  connectCanvas.width = window.innerWidth;
  connectCanvas.height = window.innerHeight;

  const nb = Math.round(particleCanvas.width * particleCanvas.height * (options.density / 100000));
  particleArray = [];

  for (let i = nb; i > 0; i--) {
    const radius = Math.random();
    const x = Math.random() * particleCanvas.width;
    const y = Math.random() * particleCanvas.height;
    const vx = (Math.random() * 2) - 1;
    const vy = (Math.random() * 2) - 1;

    const newParticle = new Particle(radius, x, y, vx, vy);
    particleArray.push(newParticle);
  }

  const animateParticles = () => {
    particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    
    connectCtx.clearRect(0, 0, connectCanvas.width, connectCanvas.height);
    connectCtx.fillStyle = options.backgroundColor;
    connectCtx.fillRect(0, 0, connectCanvas.width, connectCanvas.height);

    for (let i = 0; i < nb; i++) {
      const particle = particleArray[i];
      particle.move({...options.particle});
      particle.connect({...options.connect});
    }

    animationId = window.requestAnimationFrame(animateParticles);
  }

  animationId = window.requestAnimationFrame(animateParticles);
}

const detectMouseMove = (mousePosition: MouseEvent) => {
  mouseX = mousePosition.clientX;
  mouseY = mousePosition.clientY;
}

const detectResize = () =>  {
  cancelAnimationFrame(animationId);
  createParticles();
}

export const initParticles = (newParticlesCanvas: HTMLCanvasElement, newConnectionsCanvas: HTMLCanvasElement, initOptions: Options) => {
  particleCanvas = newParticlesCanvas;
  particleCtx = particleCanvas.getContext('2d') as CanvasRenderingContext2D;
  connectCanvas = newConnectionsCanvas;
  connectCtx = connectCanvas.getContext('2d', { alpha: false}) as CanvasRenderingContext2D;
  options = initOptions;

  if (!!particleCtx) {
    createParticles();
    window.addEventListener("mousemove", detectMouseMove);
    window.addEventListener("resize", () => detectResize());
  }
}

export const destroyParticles = () => {
  particleArray = [];
  cancelAnimationFrame(animationId);
  window.removeEventListener('mousemove', detectMouseMove);
  window.removeEventListener('resize', detectResize);
}

export default createParticles;