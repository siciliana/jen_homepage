$(document).ready(function(){

	$.ajaxSetup ({
    // Disable caching of AJAX responses
    cache: false
	});

	$('.jen').click(function() {
		$('.jen').toggle('slow')
	});

  $("#about_header").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
  });

  $("#skills_header").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 1000);
  });

  $("#projects_header").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
  });

	$('.cfh').hide();
	$('#cfh').click(function(){
		$('.cfh').toggle('slow'); 
	});

	$('.btc').hide();
	$('#btc').click(function(){
		$('.btc').toggle('slow'); 
	});

	$('.social_header').hide(); 
	$('#follow')
		.on("click", function() {
			$('.teal').css("height", "100px");
			$('.social_header').toggle('slow');
	}); 

	$('.teal').on("mouseleave", function(){
		$(this).css("height", "60px");
		$('.social_header').hide('slow'); 
	});
});

