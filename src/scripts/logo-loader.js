var LogoLoader = (function($) {

  var logo = $('#site-logo');
  var logoInner = $('.site-logo__inner');
  var logoInnerItem = $('.site-logo__item');

  var logoActive = false;

  var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

  var start = function() {
    logoActive = true;
    logo.removeClass('is-exiting').addClass('is-entering');

    logoInnerItem.one(transitionEnd, function(e) {
      if (logoActive) {
        logo.removeClass('is-entering').addClass('is-active');
      }
    });

    return 'Start loader animation.';
  };

  var stop = function() {
    logoActive = false;
    logo.addClass('is-exiting');

    logoInner.one(transitionEnd, function(e) {
      if (!logoActive) {
        logo.removeClass('is-entering is-active is-exiting');
      }
    });

    return 'End loader animation.';
  };

  return {
    start: start,
    stop: stop
  };

})(jQuery);
