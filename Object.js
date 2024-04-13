

var user = {
    firstName : "Cheenu",
    lastName : "dk",
    role : "CEO",
    loginCount : 32,
    courseList:[],

    buyCourse : function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.firstName} enrolled in total number of ${this.courseList.length} courses`;
    }
};

user.buyCourse("Node js course");
user.buyCourse("React js course");
user.buyCourse("js course");

console.log(user.getCourseCount());