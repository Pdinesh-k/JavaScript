const User = require("./classjs");

const cheenu = new User("cheenu","cheenu.dev")

console.log(cheenu.getInfo());

cheenu.enrollCourse("React");
cheenu.enrollCourse("DSA");
cheenu.enrollCourse("Generative AI");

console.log(cheenu.getCourseList());

let courses = hitesh.getCourseList();
courses.forEach((c) => console.log(c));