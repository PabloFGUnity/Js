const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject(array) {
  const result = [];
  for (const item of array) {
    const [name, skills, scores] = item; // ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]]
    const out = { name, skills, scores };
    result.push(out);
  }
  return result;
}

console.log(convertArrayToObject(students));

//   console.log(convertArrayToObject(students))[
//     ({
//       name: "David",
//       skills: ["HTM", "CSS", "JS", "React"],
//       scores: [98, 85, 90, 95],
//     },
//     {
//       name: "John",
//       skills: ["HTM", "CSS", "JS", "React"],
//       scores: [85, 80, 85, 80],
//     })
//   ];
