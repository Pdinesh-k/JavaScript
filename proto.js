const User = {
    firstName : "cheenu",
    role : "Admin",
    courseCount : 3,

    getInfo : function(){
        console.log(`
        Firstname is ${this.firstName},
        role is ${this.role},
        courseCount is ${this.courseCount},
        `)
    },
};

// console.log(User.getInfo());

const User1 = {
    firstName : "valar",
    role : "Sub-Admin",
    CourseCount : 4
}

// User.getInfo.bind(User1)();

var UserInfo = User.getInfo.bind(User1);
UserInfo();
