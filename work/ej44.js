const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};
const studentString = JSON.stringify(student);
console.log(studentString);

const student3 = JSON.parse(studentString);
console.log(student3);

student3.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
console.log(student.skills.frontEnd.length);
console.log(student3.skills.frontEnd.length);
