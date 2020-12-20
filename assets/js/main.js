$(document).ready(function() {

$(".mobile__logo").on('click', function(){
  if ($(".mobile__nav").hasClass("active")) {
  	$(".mobile__nav").removeClass("active");
  } else {
  	$(".mobile__nav").addClass("active");
  }
});

 

    var winWidth = $(window).width();

    if (winWidth <= 1024) {
   $('.slider-nav').slick('unslick');
} else {
   $('.slider-for').slick({infinite: true,
  	        slidesToShow: 1,
  	        slidesToScroll: 1,
  	        arrows: false,
  	        fade: true,
  	        asNavFor: '.slider-nav'
  	    });

    $('.slider-nav').slick({
    	infinite: true,
    	slidesToShow: 7,
    	slidesToScroll: 1,
    	asNavFor: '.slider-for',
    	dots: false,
    	arrows: true,
    	centerMode: true,
    	focusOnSelect: true   	
    });
}

});     

    