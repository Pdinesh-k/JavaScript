var User = function(name,CourseCount){
    this.name = name;
    this.CourseCount = CourseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.CourseCount}`);
    };
};

var cheenu = new User("cheenu",5);
//console.log(cheenu);
//cheenu.getCourseCount();

// User.prototype.getName = function(){
//     console.log(`Your firstname is : ${this.name}`);
// };
// if(cheenu.hasOwnProperty("name")){
//     console.log(cheenu.name);
// } 

// function doAddition(x){
//     return function(y){
//         return x+y;
//     };
// }

// var add5 = doAddition(4);
// console.log(add5(5));


function doSubtraction(x){
    return function(y){
        return x-y;
    }
}

var sub = doSubtraction();
console.log(doSubtraction(5)(4));

//This is known as curring

