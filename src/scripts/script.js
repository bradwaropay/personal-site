(function($) {
  WebFont.load({
    google: {
      families: ['Raleway:400,700', 'Bitter:700']
    }
  });

  $('pre').addClass('prettyprint linenums nocode');
  prettyPrint();

  backgroundParticles();
})(jQuery);
