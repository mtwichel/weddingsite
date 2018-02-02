var windowHeight;
var windowMargin;
var jumboHeight;



function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled+windowMargin) + 'px');
}

$(window).scroll(function(e){
    parallax();
});

function resizeWindow(){
  windowHeight = $(window).height();
  windowMargin = windowHeight/5;
  jumboHeight = windowHeight-windowMargin;

  console.log(windowHeight + "; " + windowMargin + "; " + jumboHeight);
  $('#hero').css('height', jumboHeight + 'px');
  $('#hero').css('margin-top', windowMargin + 'px');
  $('.bg').css('height', (jumboHeight+windowMargin) + 'px');
}
$(window).resize(function(){
    resizeWindow();
});

$(document).ready(function() {
    resizeWindow();
});
