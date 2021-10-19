var argArray = process.argv;

let sum = 0;

argArray.forEach( (element, index) => {
    if (index >= 2) sum += Number(element);
});

console.log(sum);
