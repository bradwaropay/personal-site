var BackgroundParticles = (function() {

  var canvas = $('#background-particles').get(0),
      ctx = canvas.getContext('2d'),
      particleColor = '#422727',
      connectColor = '#422727',
      connectWidth = .1;

  var particles = {
    nb: 0,
    array: [],
    distance: 60
  };

  var mousePosition = {
    radius: 100
  };

  var _Particle = function() {

    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.vx = -.5 + Math.random();
    this.vy = -.5 + Math.random();

    this.radius = Math.random();

  }

  _Particle.prototype = {

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

  var _drawParticles = function() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (i = 0; i < particles.nb; i++) {

      particles.array.push(new _Particle());
      var particle = particles.array[i];
      particle.create();

    }

    particle.animate();
    particle.connect();

    requestAnimationFrame(_drawParticles);

  }

  var _animateParticles = function() {

    requestAnimationFrame(_drawParticles);

  }

  var _drawCanvas = function() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = particleColor;
    ctx.strokeStyle = connectColor;
    ctx.lineWidth = connectWidth;

    particles.nb = Math.round((canvas.width * canvas.height) * .0004);
    particles.array = []

  }

  var init = function() {

    _drawCanvas();

    _animateParticles();

    if ($(canvas).hasClass('is-active')) {

      $(canvas).hide().fadeIn(2000);

    }

    else {

      $(canvas).addClass('is-active').fadeIn(2000);

    }

    window.onmousemove = function(canvasPosition) {

      mousePosition.x = canvasPosition.pageX;
      mousePosition.y = canvasPosition.pageY - window.scrollY;

    }

    window.addEventListener('resize', _drawCanvas, false);

    return 'Initializing Background Particles';

  }

  return {
    init: init
  };

})();
