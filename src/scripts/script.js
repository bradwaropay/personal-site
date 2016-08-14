(function($) {

  if ($('#disqus_thread').length < 1) {
    BackgroundParticles.init();
  }

  WebFont.load({

    google: {
      families: ['Raleway:400,700', 'Bitter:700']
    }

  });

  $('pre').addClass('prettyprint linenums nocode');
  prettyPrint();

})(jQuery);
