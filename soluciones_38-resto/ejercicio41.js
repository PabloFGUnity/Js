// const constants = [2.72, 3.14, 9.81, 37, 100];
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
// Desestructurar y asignar los elementos del
// array de constantes para e, pi, gravedad, temperaturaCorporal y ebullicionAgua.
const constants = [2.72, 3.14, 9.81, 37, 100];
const [, , , v4] = constants;
console.log(v4);
// Desestructurar y asignar los elementos del array de países a fin, est, sw, den, nor
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);
// Desestructurar el objeto rectángulo por sus propiedades o keys.
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const { perimeter } = rectangle;
console.log(perimeter);

users.forEach((item, index) => {
  let { name, scores, skills, age } = item;
  console.log(index, name, scores, skills, age);
});

function paraCada(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function funcionCallback(item, index, array) {
  let { name, scores, skills, age } = item;
  name = name;
  console.log(index, name, scores, skills, age);
}

paraCada(users, funcionCallback);
paraCada(users, (item, index) => {
  let { name, scores, skills, age } = item;
  console.log(index, name, scores, skills, age);
});

const menosDe2 = users.filter((user) => user.skills.length < 2);
console.log(menosDe2);

for (let i=0;i<users.length;i++)
    {
        
        //nombre.push(item.name,item.age)
        console.log(users[i].name,users[i].age);
    }