var BackgroundParticles = (function() {

  var documentWidth,
      documentHeight;

  var canvas = $('#background-particles').get(0),
      ctx = canvas.getContext('2d'),
      particleFadeIn = 2000,
      particleColor = '#422727',
      connectColor = '66, 39, 39',
      connectWidth = .1;

  var particles = {
    nb: 0,
    array: [],
    distance: 75
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
      ctx.fillStyle = particleColor;
      ctx.fill();

    },

    animate: function() {

      for(i = 0; i < particles.nb; i++){

        var particle = particles.array[i];

        if (particle.x < 0 || particle.x > canvas.width) {

          particle.vx = - particle.vx;
          particle.vy = particle.vy;

        }

        if (particle.y < 0 || particle.y > canvas.height) {

          particle.vx = particle.vx;
          particle.vy = - particle.vy;

        }

        particle.x += particle.vx;
        particle.y += particle.vy;

      }

    },

    connect: function() {

      for (i = 0; i < particles.nb; i++) {

        for (j = 0; j < particles.nb; j++) {

          var iParticle = particles.array[i],
              iParticleLocation = Math.sqrt(Math.pow(iParticle.x - mousePosition.x, 2) + Math.pow(iParticle.y - mousePosition.y, 2)),
              jParticle = particles.array[j],
              jParticleLocation = Math.sqrt(Math.pow(jParticle.x - mousePosition.x, 2) + Math.pow(jParticle.y - mousePosition.y, 2)),
              particleDistance = Math.sqrt(Math.pow(iParticle.x - jParticle.x, 2) + Math.pow(iParticle.y - jParticle.y, 2));

          if (iParticleLocation <= mousePosition.radius && particleDistance <= particles.distance) {

              var connectOpacity = particleDistance / particles.distance;

              ctx.beginPath();
              ctx.moveTo(iParticle.x, iParticle.y);
              ctx.lineTo(jParticle.x, jParticle.y);
              ctx.strokeStyle = 'rgba(' + connectColor + ',' + connectOpacity + ')';
              ctx.lineWidth = connectWidth;
              ctx.stroke();

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

    particles.nb = Math.round((canvas.width * canvas.height) * .0003);
    particles.array = []

    if ($(canvas).hasClass('is-active')) {

      $(canvas).hide().fadeIn(particleFadeIn);

    }

    else {

      $(canvas).addClass('is-active').fadeIn(particleFadeIn);

    }

  }

  var init = function() {

    setTimeout(function(){

      documentWidth = $(document).width();
      documentHeight = $(document).height();

      _drawCanvas();

      _animateParticles();

    }, 1000);

    $(window).mousemove(function(canvasPosition) {

      mousePosition.x = canvasPosition.pageX;
      mousePosition.y = canvasPosition.pageY - window.scrollY;

    })

    $(window).resize(function() {

      if (documentWidth != $(document).width() || documentHeight != $(document).height()) {

        documentWidth = $(document).width();
        documentHeight = $(document).height();

        _drawCanvas();

      }

    });

    return 'Initialize Background Particles';

  }

  return {
    init: init
  };

})();
