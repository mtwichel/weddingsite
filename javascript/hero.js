var windowHeight;
var windowMargin;
var jumboHeight;
var navbarHeight;
var bgHeight;



function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (bgHeight - scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});

function resizeWindow(){
  windowHeight = $(window).height();
  windowMargin = windowHeight/3; 
  jumboHeight = windowHeight-windowMargin-17;
  navbarHeight = $("#main-nav").height();
  bgHeight = jumboHeight+windowMargin-navbarHeight;



  $('#hero').css('height', (jumboHeight - navbarHeight) + 'px');
  $('#hero').css('margin-top', windowMargin + 'px');
  $('.bg').css('height', bgHeight + 'px');

  parallax();
}
$(window).resize(function(){
    resizeWindow();
});

$(document).ready(function() {
    resizeWindow();
});
