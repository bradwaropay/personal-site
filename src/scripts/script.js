(function($) {

  WebFont.load({

    google: {
      families: ['Raleway:400,700', 'Bitter:700']
    }

  });

  $('pre').addClass('prettyprint linenums nocode');
  prettyPrint();


  if ($('#disqus_thread').length < 1) {
    BackgroundParticles.init();
  }

})(jQuery);
