$(document).ready(function(){

	$('.social_header').hide(); 
	$('#follow').on('click', function() {
		$('.teal').css("height", "100px");
					$('.social_header').toggle('slow')
	});
});   