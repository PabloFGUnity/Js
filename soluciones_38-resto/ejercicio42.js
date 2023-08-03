const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name, skills, [, , jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);
