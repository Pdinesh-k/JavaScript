const myStates = [
    "TN" , "KL" , "KA" , "AP",
];

// for(let i = 0 ; i<myStates.length ;i++){
//     console.log(myStates[i]);
// }

// let i = 0;
// while(i<myStates.length){
//     console.log(myStates[i]);
//     i++;
// }

// myStates.forEach((s) => (console.log(s)));

for(const i of myStates){
    console.log(i);
}

var user = {
    firstName : "Cheenu",
    lastName : "dk",
    role : "CEO",
    loginCount : 32,}

for(const n in user){
    console.log(`key is ${n} and value is ${user[n]}`)
}