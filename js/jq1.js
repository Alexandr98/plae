$(document).ready(function(){
			$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 0
		}, 500);
		e.preventDefault();
		});
		return false;
});