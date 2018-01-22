var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled+200) + 'px');
}

$(window).scroll(function(e){
    parallax();
});

$('.navbar').affix({
  offset: {top: 100}
});
