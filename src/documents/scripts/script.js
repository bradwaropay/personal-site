(function(){

  function setFeaturedWorkBackground(){
    var featuredWorkBackground = Trianglify({
      height: document.getElementsByClassName('splash-header')[0].offsetHeight,
      width: document.getElementsByClassName('splash-header')[0].offsetWidth,
      cell_size: 100,
      x_colors: ['#7a1631', '#3f0b1b', '#7a1631'],
      y_colors: ['#fc7d49', '#3f0b1b', '#fc7d49'],
    });

    document.getElementsByClassName('splash-header')[0].appendChild(featuredWorkBackground.canvas());
  }

  setFeaturedWorkBackground();

  var resizeTimer;

  $(window).on('resize', function(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      setFeaturedWorkBackground();
    }, 250);
  });
})();
