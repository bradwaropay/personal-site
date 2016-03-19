var CanvasParticles = {

  init: function() {
    this.canvas = document.getElementById("background-particles");
    this.ctx = this.canvas.getContext('2d');
    this.colorParticle = '#422727';
    this.colorConnection = '#422727';

    this.particles = { nb: 350,
      array: []
    };

    this.cursor = {
      distance: 60,
      radius: 100
    };

    setInterval(this.createParticles, 1000/30);

    window.onmousemove = function(parameter) {
      CanvasParticles.cursor.x = parameter.pageX;
      CanvasParticles.cursor.y = parameter.pageY - window.scrollY;
    }

    this.resizeCanvas();

    window.addEventListener('resize', this.resizeCanvas, false);
  },

  particle: function() {
    this.x = Math.random() * CanvasParticles.canvas.width;
    this.y = Math.random() * CanvasParticles.canvas.height;

    this.vx = -.5 + Math.random();
    this.vy = -.5 + Math.random();

    this.radius = Math.random();
  },

  createParticles: function() {
    CanvasParticles.ctx.clearRect(0, 0, CanvasParticles.canvas.width, CanvasParticles.canvas.height);
    for (i = 0; i < CanvasParticles.particles.nb; i++) {
      CanvasParticles.particles.array.push(new CanvasParticles.particle());
      particle = CanvasParticles.particles.array[i];

      particle.create();
    }

    particle.animate();
    particle.line();
  },

  redrawCanvas: function() {
    this.ctx.fillStyle = this.colorParticle;
    this.ctx.strokeStyle = this.colorConnection;
    this.ctx.lineWidth = .1;
  },

  resizeCanvas: function() {
    CanvasParticles.canvas.width = window.innerWidth;
    CanvasParticles.canvas.height = window.innerHeight;

    for (i = 0; i < CanvasParticles.particles.nb; i++) {
      particle = CanvasParticles.particles.array[i];

      if (this.particle.y > CanvasParticles.canvas.height) {
        this.particle.y = CanvasParticles.canvas.height;
      }
      else if (this.particle.x > CanvasParticles.canvas.width) {
        this.particle.x = CanvasParticles.canvas.width;
      }
    }

    CanvasParticles.redrawCanvas();
  }
}

CanvasParticles.particle.prototype = {
  create: function() {
    CanvasParticles.ctx.beginPath();
    CanvasParticles.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    CanvasParticles.ctx.fill();
  },

  animate: function() {
    for (i = 0; i < CanvasParticles.particles.nb; i++) {
      particle = CanvasParticles.particles.array[i];

      if (particle.y < 0 || particle.y > CanvasParticles.canvas.height) {
        particle.vx = particle.vx;
        particle.vy = - particle.vy;
      }
      else if (particle.x < 0 || particle.x > CanvasParticles.canvas.width) {
        particle.vx = - particle.vx;
        particle.vy = particle.vy;
      }
      particle.x += particle.vx;
      particle.y += particle.vy;
    }
  },

  line: function() {
    for (i = 0; i < CanvasParticles.particles.nb; i++) {
      for (j = 0; j < CanvasParticles.particles.nb; j++) {
        iParticle = CanvasParticles.particles.array[i];
        jParticle = CanvasParticles.particles.array[j];

        if ((iParticle.x - jParticle.x) < CanvasParticles.cursor.distance && (iParticle.y - jParticle.y) < CanvasParticles.cursor.distance && (iParticle.x - jParticle.x) > - CanvasParticles.cursor.distance && (iParticle.y - jParticle.y) > - CanvasParticles.cursor.distance) {
          if ((iParticle.x - CanvasParticles.cursor.x) < CanvasParticles.cursor.radius && (iParticle.y - CanvasParticles.cursor.y) < CanvasParticles.cursor.radius && (iParticle.x - CanvasParticles.cursor.x) > - CanvasParticles.cursor.radius && (iParticle.y - CanvasParticles.cursor.y) > - CanvasParticles.cursor.radius) {
            CanvasParticles.ctx.beginPath();
            CanvasParticles.ctx.moveTo(iParticle.x, iParticle.y);
            CanvasParticles.ctx.lineTo(jParticle.x, jParticle.y);
            CanvasParticles.ctx.stroke();
            CanvasParticles.ctx.closePath();
          }
        }
      }
    }
  }
};
