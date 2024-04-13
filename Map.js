var myMap = new Map();

myMap.set(100,"Excellent");
myMap.set(90,"Very Good");
myMap.set(80,"Good");

// console.log(myMap);

// for(let key of myMap.keys()){
//     console.log(`key is ${key}`);
// }

// for(let value of myMap.values()){
//     console.log(`value is ${value}`);
// }

// for(let [key,value] of myMap){
//     console.log(`key is ${key}`);
//     console.log(`value is ${value}`);
// }

myMap.forEach((v,k) => console.log(`${v} and key is ${k}`));