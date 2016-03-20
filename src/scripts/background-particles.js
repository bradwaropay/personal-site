var backgroundParticles = function() {
  // Get canvas, set context, and particle colors
  var canvas = document.getElementById('background-particles'),
      ctx = canvas.getContext('2d'),
      colorParticle = '#422727',
      colorConnect = '#422727';

  // Create particles array and set reaction distance
  var particles = {
    array: [],
    distance: 60
  };

  // Set reaction radius on mouse position
  var mousePosition = {
    radius: 100,
  };

  // Construct particle
  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.vx = -.5 + Math.random();
    this.vy = -.5 + Math.random();

    this.radius = Math.random();
  }

  // Create, animate, and connect particle
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

  // Create particles
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

  // Get mouse position
  window.onmousemove = function(position) {
    mousePosition.x = position.pageX;
    mousePosition.y = position.pageY - window.scrollY;;
  }

  // Draw canvas
  function redrawCanvas() {
    ctx.fillStyle = colorParticle;
    ctx.lineWidth = .1;
    ctx.strokeStyle = colorConnect;
  }

  // Adjust particle count according to screen area
  function scaleParticleCount() {
    particles.nb = Math.round((canvas.width * canvas.height) * .0004);

    createParticles();

    particles.array.length = particles.nb;
  }

  // Resize and redraw canvas
  // Adjust particles according to new area and new boundries
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    redrawCanvas();

    scaleParticleCount();

    for(i = 0; i < particles.nb; i++){
      var particle = particles.array[i];

      if (particle.x > canvas.width) {
        particle.x = canvas.width;
      }

      else if (particle.y > canvas.height) {
        particle.y = canvas.height;
      }

    }
  }

  // Create and animate particles
  setInterval(createParticles, 1000/30);

  // Listen for resize
  window.addEventListener('resize', resizeCanvas, false)

  // Draw canvas and create initial particles
  resizeCanvas();
};
