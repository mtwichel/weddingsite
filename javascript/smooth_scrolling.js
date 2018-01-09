$('.nav-link').click(function(){
	$('html, body').animate({
		scrollTop: $("#our-story").offset().top
	}, 2000);
	console.log("HI");
});
