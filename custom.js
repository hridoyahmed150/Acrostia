$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:1,
  	navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  	nav:true,
  	loop:true,
  	autoplay:true,
  });
});


$(document).ready(function(){
	var mixer = mixitup('.portfolio');
});

// $(function () {
// 	var HomeOffset = $('#Home').offset().top;
// 	var ServiceOffset = $('#Service').offset().top;
// 	var AboutOffset = $('#About').offset().top;
// 	var WorkOffset = $('#Work').offset().top;
// 	var contactOffset = $('#contact').offset().top;

// 	$(document).on('scroll',function(){

// 		var scrollTop = $(document).scrollTop;
// 		var activeLi;

// 		if (scrollTop<ServiceOffset) {
// 			activeLi = $('.menue>ul>li:nth-child(1)');
// 		}
// 		else if (scrollTop<AboutOffset) {
// 			activeLi = $('.menue>ul>li:nth-child(2)');
// 		}
// 		else if (scrollTop<WorkOffset) {
// 			activeLi = $('.menue>ul>li:nth-child(3)');
// 		}
// 		else
// 		{
// 			activeLi = $('.menue>ul>li:nth-child(4)');
// 		}
// 		activeLi.addClass('active'); 
// 		$('.menue>ul>li').not(activeLi).removeClass('active');
// 	});
// });














