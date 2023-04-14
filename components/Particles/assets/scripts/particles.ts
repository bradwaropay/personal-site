import { hexToRGB } from '~/assets/scripts/utils'

let particlesCanvas: HTMLCanvasElement;
let particlesCtx: CanvasRenderingContext2D;
let connectionsCanvas: HTMLCanvasElement;
let connectionsCtx: CanvasRenderingContext2D;
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
    particlesCtx.beginPath();
    particlesCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    particlesCtx.fillStyle = `rgb(${hexToRGB(options.color)})`;
    particlesCtx.fill();

    if (this.x < 0 || this.x > particlesCanvas.width) this.vx = -this.vx;
    if (this.y < 0 || this.y > particlesCanvas.height) this.vy = -this.vy;

    this.x += this.vx;
    this.y += this.vy;
  };

  connect(options: ConnectOptions) {
    for (let i = particleArray.length; i > 0; i--) {
      const that = particleArray[particleArray.length - i];
      const location = Math.sqrt(Math.pow(this.x - mouseX, 2) + Math.pow(this.y - mouseY, 2));
      const distance = Math.sqrt(Math.pow(this.x - that.x, 2) + Math.pow(this.y - that.y, 2));
      const connectOpacity = 1 - distance / options.distance;

      if (location <= options.detectRadius && distance <= options.distance) {
        connectionsCtx.beginPath();
        connectionsCtx.moveTo(this.x, this.y);
        connectionsCtx.lineTo(that.x, that.y);
        connectionsCtx.strokeStyle = `rgba(${hexToRGB(options.color)},${connectOpacity})`;
        connectionsCtx.lineWidth = options.width;
        connectionsCtx.stroke();
      }
    }
  };
};

export const createParticles = () => {
  particlesCanvas.width = window.innerWidth;
  particlesCanvas.height = window.innerHeight;
  connectionsCanvas.width = window.innerWidth;
  connectionsCanvas.height = window.innerHeight;

  const nb = Math.round(particlesCanvas.width * particlesCanvas.height * (options.density / 100000));
  particleArray = [];

  for (let i = nb; i > 0; i--) {
    const radius = Math.random();
    const x = Math.random() * particlesCanvas.width;
    const y = Math.random() * particlesCanvas.height;
    const vx = (Math.random() * (options.particle.velocity * 2)) + (-1 * options.particle.velocity);
    const vy = (Math.random() * (options.particle.velocity * 2)) + (-1 * options.particle.velocity);

    const newParticle = new Particle(radius, x, y, vx, vy);
    particleArray.push(newParticle);
  }

  const animateParticles = () => {
    particlesCtx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
    
    connectionsCtx.clearRect(0, 0, connectionsCanvas.width, connectionsCanvas.height);
    connectionsCtx.fillStyle = options.backgroundColor;
    connectionsCtx.fillRect(0, 0, connectionsCanvas.width, connectionsCanvas.height);

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
  particlesCanvas = newParticlesCanvas;
  particlesCtx = particlesCanvas.getContext('2d') as CanvasRenderingContext2D;
  connectionsCanvas = newConnectionsCanvas;
  connectionsCtx = connectionsCanvas.getContext('2d', { alpha: false}) as CanvasRenderingContext2D;
  options = initOptions;

  if (!!particlesCtx) {
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