const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const ext = `.${process.argv[3]}`;

fs.readdir(dir, (err, files) => {
    if (err) throw err;
    const filesFiltered = files.filter((file) => path.extname(file) === ext);
    filesFiltered.forEach((file) => console.log(file));
});




