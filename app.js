const fs = require('fs');

let data = fs.rename('./vishal.js', 'renamed.js', err => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('file renamed successfully');
    }
});

console.log('after renaming the file');