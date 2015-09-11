(function(){

  // Append hover bar to nav list
  function appendNavHoverBar() {
    $('.main-nav__list').append('<li class="main-nav__list__hoverbar"></li>');
  }

  appendNavHoverBar();

  // Set initial hover bar position
  function setNavHoverBarPosition() {
    $('.main-nav__list__item').each(function() {
      if ($(this).hasClass('active')) {
        var navHoverBarLeftInitial = $('a', this).position().left + parseInt($('a', this).css('padding-left')),
            navHoverBarWidthInitial = $('a', this).width();
        $('.main-nav__list__hoverbar').css({borderTopColor: '#ffd462', left: navHoverBarLeftInitial, width: navHoverBarWidthInitial});
      }
    });
  }

  // Set current hover bar position
  function hoverNavHoverBarPosition() {
    $('.main-nav__list__item').hover(
      function() {
        if ($(this).hasClass('inactive')) {
          var navHoverBarLeftCurrent = $('a', this).position().left + parseInt($('a', this).css('padding-left')),
              navHoverBarWidthCurrent = $('a', this).width();
          $('.main-nav__list__hoverbar').css({borderTopColor: '#eee', left: navHoverBarLeftCurrent, width: navHoverBarWidthCurrent});
        }
      },
      function () {
        setNavHoverBarPosition();
      }
    );
  }

  setNavHoverBarPosition();
  hoverNavHoverBarPosition();

  // Toggle open/close mobile navigation
  var mobileNavIsOpen = false;

  function toggleMobileNav() {
    $('.main-nav').toggleClass('is-open');
  }

  $('.main-nav__hamburger').click(function(){
    toggleMobileNav();
    if (mobileNavIsOpen === false) {
      mobileNavIsOpen = true;
    } else {
      mobileNavIsOpen = false;
    }
  });

  // Initialize and append trianglify
  function setFeaturedWorkBackground(){
    var featuredWorkBackground = Trianglify({
      height: document.getElementsByClassName('splash-header')[0].offsetHeight,
      width: document.getElementsByClassName('splash-header')[0].offsetWidth,
      cell_size: 100,
      x_colors: ['#7a1631', '#3f0b1b', '#7a1631'],
      y_colors: ['#fc7d49', '#3f0b1b', '#7a1631'],
    });

    $('.splash-header').each(function() {
      $(this).append(featuredWorkBackground.canvas());
    });
  }

  // Remove old trianglify
  function clearFeaturedWorkBackground(){
    $('.splash-header canvas').remove();
  }

  setFeaturedWorkBackground();

  // Close mobile nav, reset hover bar, and remove, reinitialize and append trianglify, on window resize
  var resizeTimer;

  $(window).on('resize', function(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (mobileNavIsOpen === true) {
        toggleMobileNav();
        mobileNavIsOpen = false;
      }
      setNavHoverBarPosition();
      clearFeaturedWorkBackground();
      setFeaturedWorkBackground();
    }, 250);
  });
})();
