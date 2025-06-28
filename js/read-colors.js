// load the filesystem module
const fs = require('fs');

//read file asynchonously 
fs.readFile('colors.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log('Error reading the file: ' + err);
        return;
    }
    //splitting up the lines to add the message after 
    const lines = data.split(/\r?\n/);

    // add "is a color" 
    lines.forEach(line => {
        if (line.trim()) { 
            console.log(`${line} is a color`);
        }
    });

    console.log('My favorite color is: ' + data);

});

