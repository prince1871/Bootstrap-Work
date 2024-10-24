const generatePassword = require('generate-password'); // Import the package

// Function to generate a random password
function createRandomPassword() {
    const password = generatePassword.generate({
        length: 12, // Specify the length of the password
        numbers: true, // Include numbers
        symbols: true, // Include symbols
        uppercase: true, // Include uppercase letters
        lowercase: true // Include lowercase letters
    });

    console.log('Generated Password:', password); // Log the generated password
}

// Call the function to generate and display a random password
createRandomPassword();
