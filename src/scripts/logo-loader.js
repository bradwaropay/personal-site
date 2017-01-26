var LogoLoader = (function($) {

  var logo = $('#site-logo');
  var logoInner = $('.site-logo__inner');
  var logoInnerItem = $('.site-logo__item');

  var logoActive = false;

  var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

  var start = function() {
    logoActive = true;
    logo.addClass('is-entering');
    logo.removeClass('is-exiting');

    logoInnerItem.one(transitionEnd, function(e) {
      if (logoActive) {
        logo.addClass('is-active');
        logo.removeClass('is-entering');
      }
    });

    return 'Starting loader animation.';
  }

  var stop = function() {
    logoActive = false;
    logo.addClass('is-exiting');

    logoInner.one(transitionEnd, function(e) {
      if (!logoActive) {
        logo.removeClass('is-entering');
        logo.removeClass('is-active');
        logo.removeClass('is-exiting');
      }
    });

    return 'End loader animation.';
  }

  return {
    start: start,
    stop: stop
  };

})(jQuery);
