var windowHeight = $(window).height();
var windowMargin = windowHeight/5;
var jumboHeight = windowHeight-windowMargin;


$( document ).ready(function() {
    console.log( "ready!" );
    $('#hero').css('height', jumboHeight + 'px');
    $('#hero').css('margin-top', windowMargin + 'px');
    $('.bg').css('height', (jumboHeight+windowMargin) + 'px');
});
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled+windowMargin) + 'px');
}

$(window).scroll(function(e){
    parallax();
});
