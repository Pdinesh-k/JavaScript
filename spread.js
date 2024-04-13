// var myObj = {};

// Object.assign(myObj , {a:1,b:2,c:3} , {x:7,y:8,z:9});
// console.log(myObj);

// function sumOne(a,b){
//     return a+b;
// }

// var inp = [5,4];
// console.log(sumOne(...inp));


function sumTwo(...args){
    let sum = 0;
    for(const i of args){
        sum+=i;
    }
    return sum;
}


console.log(sumTwo(100,90,45,23,12,67));