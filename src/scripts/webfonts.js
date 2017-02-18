var WebFonts = (function($) {

  var init = function(...fonts) {

    WebFont.load({

      google: {
        families: [...fonts]
      }

    });

  };

  return {
    init: init
  };

})(jQuery);
