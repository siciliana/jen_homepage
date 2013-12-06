$(document).ready(function(){
	$('.jen').on('click', function() {
		$('.jen').toggle('slow')
	})

	$('.social_header').hide(); 

	$('#follow').on('click', function() {
		$('.teal').css("height", "100px");
					$('.social_header').toggle('slow')
	});  
});

	// $('.social').toggle( "bounce", { times: 3 }, "slow" )
