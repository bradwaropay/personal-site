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
  var th = $(this).attr('id');
  addCSSRule(document.styleSheets[2], '#' + th, 'background-image: url(/work/' + th + '.jpg)');
});

// Work Background
var bg = $('.work .bg').attr('id');
addCSSRule(document.styleSheets[2], '.work .bg:after', 'background-image: url(/work/' + bg + '.jpg)');
