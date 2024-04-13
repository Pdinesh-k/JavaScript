// const uno = () => {
//     return "I am one";
// };

// // const dos = () => {
// //     setTimeout(() => {
// //         return "I am Two";
// //     },5000);
// // };

// const dos = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("I am two");
//         },3000);
//     })
// };

// const tres = () => {
//     return "I am three";
// };

// const callMe = async() => {
//     let valOne = uno();
//     console.log(valOne);

//     let valTwo = await dos();
//     console.log(valTwo);

//     let valThree = tres();
//     console.log(valThree);
// };

// callMe();

const add = (a,b) => {
    return a+b;
}

const sub = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(a-b);
        },5000)
    });
}

const mul = (a,b) => {
    return a*b;
}

const callMe = async() =>{
    let adding = add(6,4);
    console.log("Result of adding : "+adding);

    let subtracting = await sub(6,4);
    console.log("Result of subtracting : "+subtracting);

    let multiplying = mul(6,4);
    console.log("Result of multiplying : "+multiplying);
}

callMe();