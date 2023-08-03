const constants = [2.72, 3.14, 9.81, 37, 100];

const [e, pi, g, temp, ebullicion]= constants;

console.log(terminos);


const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];

const [fin, est, sw, den, nor]= countries;

console.log(paises);


const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

const  {width,height,area,perimeter }= rectangle

console.log(rectangulo);


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


for ( const user of users)
{
  const {name,scores,skills,age}=user;
  console.log(name,scores,skills,age);
}

const menosDeDos=[]
for ( const user of users)
{
  const {name,scores,skills,age}=user;
  if (skills.length < 2)
  {
    menosDeDos.push(user);
  }
}
console.log(menosDeDos);


const otro = users.filter(user => user.skills.length < 2);
console.log(otro);


