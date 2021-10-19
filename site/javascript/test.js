let map = new Map([['key1',1], ['key2',2]]);

console.log(map.get('key1')); //1

map.forEach((value, key) => {
  console.log(key, value); 
})

/*
key1 1
key2 2
*/