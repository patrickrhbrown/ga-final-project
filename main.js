$(document).ready(function(){
	console.log('it works!');
	//When I click on international, 

$('#primary-nav li').on('click', function(event){
	event.preventDefault();

	var target = $(this).find('a').attr('href');
	console.log(target);

	var section = $(this).find('a').attr('href');

	if ($(this).hasClass('active')) {
		console.log('has active class');

		$(this).removeClass('active');

		$('#slide-down').slideUp(500);

	} else {
		console.log('no active class');

		$(this).addClass('active').siblings().removeClass('active');

		$(section).show().siblings().hide();

		$('#slide-down').slideDown(500);

	}

});

});
