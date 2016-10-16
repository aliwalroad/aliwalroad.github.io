function askQuestions () {

	var firstName = prompt ('what is your first name?');
	var lastName = prompt ('what is your last name?');
	var fullName = firstName + ' ' + lastName;

	console.log(fullName);

	if (firstname == 'general' && 
		lastName !== 'Assembly') {
		alert('Hello General');
	}

	var age = prompt ('How old are you?');
	age = parseInt (age);

	if (age >= 18) {
		console.log('User is an adult.');
	} else if (age >= 13){
		console.log('User is a teenager.');
	} else {
		console.log('User is a child.')
	}

	var faveColour = prompt ('What is your favourite colour?');
	faveColour = faveColour.toLowerCase().trim();
	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour == 'green' ||
		faveColour == 'yellow') {
		$('h1').css('color', faveColour);

	}
}

// when the page has loaded
$(function() {

	// When the user clicks the image, run askQuestions
	$('img').on('click', askQuestions);

	// When the user clicks an h3
	$('h3').on('click', function() {

		// Toggle the next element
		$(this).next().slideToggle(100);

	});

});