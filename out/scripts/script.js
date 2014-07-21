// Add CSS Rules
function addCSSRule(sheet, selector, rules, index) {
  if(sheet.insertRule) {
    sheet.insertRule(selector + "{" + rules + "}", index);
  }
  else {
    sheet.addRule(selector, rules, index);
  }
}

// FitText
$('.fit-text').fitText();

// Navigation
$('.site-nav ul a').not('.site-nav .active a').hover(function(){
  $('.site-nav').attr('class','site-nav').addClass($(this).text().toLowerCase());
});

$('.site-nav ul a').mouseleave(function(){
  $('.site-nav').attr('class','site-nav').addClass($('.site-nav li.active').text().toLowerCase());
});

// Work Thumbnails
$('.work .work-entry').each(function() {
  var th = $(this).attr('id'),
      retina = window.devicePixelRatio > 1;

  if (retina) {
    addCSSRule(document.styleSheets[2], '#' + th, 'background-image: url(/images/work/' + th + '/' + th + '-th@2x.jpg)');
  }
  else {
    addCSSRule(document.styleSheets[2], '#' + th, 'background-image: url(/images/work/' + th + '/' + th + '-th.jpg)');
  }
});

// Work Background
var bg = $('.work .bg').attr('id'),
    retina = window.devicePixelRatio > 1;

if (retina) {
  addCSSRule(document.styleSheets[2], '.work .bg', 'background-image: url(/images/work/' + bg + '/' + bg + '-bg@2x.jpg)');
}
else {
  addCSSRule(document.styleSheets[2], '.work .bg', 'background-image: url(/images/work/' + bg + '/' + bg + '-bg.jpg)');
}
