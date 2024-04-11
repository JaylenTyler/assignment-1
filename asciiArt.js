const figlet = require('figlet');

// Read the command line arguments
const inputString = process.argv[2]; // Get the third item in the array (index 2), which is the first user-provided argument

if (inputString) {
    // Convert the string to ASCII art using Figlet
    figlet(inputString, (err, data) => {
        if (err) {
            console.error('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });
} else {
    console.log('Please provide a string to convert into ASCII art.');
}