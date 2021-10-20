const fs = require('fs');

console.log('before');

fs.readFile('./myFile.txt', 'utf8', (err, data) => {
    if (err)
        throw err
    console.log(data);
    console.log(data.split('\n').length - 1);
})

console.log('after');