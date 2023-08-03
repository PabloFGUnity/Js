const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

const { width: anchura, height } = rectangle;
const { height: altura } = rectangle;
console.log(rectangle);
console.log(anchura);
console.log(altura);
console.log(height);

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

const menosDeDos = [];
for (const user of users) {
  const { name, scores, skills, age } = user;
  if (skills.length < 2) {
    menosDeDos.push(user);
  }
  console.log(name, scores, skills, age);
}
console.log(menosDeDos);
const otra = users.filter((user) => user.skills.length < 2);
console.log(otra);
