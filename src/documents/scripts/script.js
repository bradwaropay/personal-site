// FitText
$('.fit-text').fitText();

// Navigation
$('.site-nav ul a').not('.site-nav .active a').hover(function(){
  $('.site-nav').attr('class',"site-nav").addClass($(this).text().toLowerCase());
});

$('.site-nav ul a').mouseleave(function(){
  $('.site-nav').attr('class',"site-nav").addClass($('.site-nav li.active').text().toLowerCase());
})

// Work Thumbnails
$('.work-item').each(function() {
  var background = $('h1', this).text().replace(/\s+/g, '-').toLowerCase();
  $(this).css('background-image', 'url(/work/' + background + '-thumb.jpg)');
});
