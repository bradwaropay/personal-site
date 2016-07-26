var backgroundParticles = function() {
  var canvas = document.getElementById('background-particles'),
      ctx = canvas.getContext('2d'),
      colorParticle = '#422727',
      colorConnect = '#422727';

  var particles = {
    array: [],
    distance: 60
  };

  var mousePosition = {
    radius: 100
  };

  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.vx = -.5 + Math.random();
    this.vy = -.5 + Math.random();

    this.radius = Math.random();
  }

  Particle.prototype = {
    create: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
    },

    animate: function() {
      for(i = 0; i < particles.nb; i++){
        var particle = particles.array[i];

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx = - particle.vx;
          particle.vy = particle.vy;
        }

        else if (particle.y < 0 || particle.y > canvas.height) {
          particle.vx = particle.vx;
          particle.vy = - particle.vy;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
      }
    },

    connect: function(){
      for (i = 0; i < particles.nb; i++) {
        for (j = 0; j < particles.nb; j++) {
          var iParticle = particles.array[i];
          var jParticle = particles.array[j];

          if ((iParticle.x - jParticle.x) < particles.distance && (iParticle.y - jParticle.y) < particles.distance && (iParticle.x - jParticle.x) > - particles.distance && (iParticle.y - jParticle.y) > - particles.distance) {
            if ((iParticle.x - mousePosition.x) < mousePosition.radius && (iParticle.y - mousePosition.y) < mousePosition.radius && (iParticle.x - mousePosition.x) > - mousePosition.radius && (iParticle.y - mousePosition.y) > - mousePosition.radius) {
              ctx.beginPath();
              ctx.moveTo(iParticle.x, iParticle.y);
              ctx.lineTo(jParticle.x, jParticle.y);
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }
    }
  };

  function createParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (i = 0; i < particles.nb; i++) {
      particles.array.push(new Particle());
      var particle = particles.array[i];
      particle.create();
    }

    particle.connect();
    particle.animate();
  }

  window.onmousemove = function(canvasPosition) {
    mousePosition.x = canvasPosition.pageX;
    mousePosition.y = canvasPosition.pageY - window.scrollY;;
  }

  function redrawCanvas() {
    ctx.fillStyle = colorParticle;
    ctx.lineWidth = .1;
    ctx.strokeStyle = colorConnect;
  }

  function scaleParticleCount() {
    particles.nb = Math.round((canvas.width * canvas.height) * .0004);
    particles.array = []

    createParticles();
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    redrawCanvas();

    scaleParticleCount();
  }

  setInterval(createParticles, 1000/30);

  window.addEventListener('resize', resizeCanvas, false)

  resizeCanvas();

  $(canvas).addClass('is-active').fadeIn(2000);
};
