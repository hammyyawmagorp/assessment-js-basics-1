const readline = require('readline');
const { CLIENT_RENEG_LIMIT } = require('tls');

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});


reader.question("Welcome to the Password Validator Tool! Please enter a password to validate. Do not include spaces!", function (input) {



	if (input.length >= 10 && !input.includes(' ')) {
		console.log('Success! Valid Password');
	} else if (input.length >= 10 && input.includes(' ')){
		console.log('Failure! Not a valid password. Do not include spaces.');
	} else if (input.length < 10 && !input.includes(' ')){
		console.log('Failure! Not a valid password. Shorter than 10 characters.')
	} else{
		console.log('Failure! Not a valid password. Must be less than 10 characters and must not include spaces.')
	} 
	
	reader.close()

});
