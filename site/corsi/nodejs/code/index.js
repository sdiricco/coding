const os = require("os");
const path = require("path");
const fs = require("fs/promises");

const filePath = "testo.txt";

async function writeLines(file, data, lines){
    for (let i = 0; i < lines; i++) {
        const line = `line ${i}: ${data}\n`
        await fs.writeFile(file, line, {flag: "a"})
    }
}


async function main(){
    console.log(os.arch())
    console.log(os.platform())
    console.log(os.totalmem())


    console.log(path.resolve(filePath));
    console.log(path.basename(filePath));
    console.log(path.parse(filePath));


    await writeLines(filePath, "Lorem ipsum", 10);


    const result = await fs.readFile(filePath, {encoding: "utf-8"});
    console.log(result);


    const arr = result.split('\n');
    console.log(arr);


    await fs.rm(filePath);


}

main();

/*
x64
linux
8029188096
/home/s/repository/wiki-programming-notes/docs/corsi/nodejs/code/testo.txt
testo.txt
{ root: '', dir: '', base: 'testo.txt', ext: '.txt', name: 'testo' }
line 0: Lorem ipsum
line 1: Lorem ipsum
line 2: Lorem ipsum
line 3: Lorem ipsum
line 4: Lorem ipsum
line 5: Lorem ipsum
line 6: Lorem ipsum
line 7: Lorem ipsum
line 8: Lorem ipsum
line 9: Lorem ipsum

[
  'line 0: Lorem ipsum',
  'line 1: Lorem ipsum',
  'line 2: Lorem ipsum',
  'line 3: Lorem ipsum',
  'line 4: Lorem ipsum',
  'line 5: Lorem ipsum',
  'line 6: Lorem ipsum',
  'line 7: Lorem ipsum',
  'line 8: Lorem ipsum',
  'line 9: Lorem ipsum',
  ''
]
*/