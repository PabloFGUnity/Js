/* Copia el objeto estudiante a newStudent sin mutar el objeto original. En el nuevo objeto añade lo
siguiente:
Añadir Bootstrap con el nivel 8 a los conjuntos de habilidades de front end
Añadir Express con nivel 9 a los conjuntos de habilidades del back end
Añadir SQL con nivel 8 a los conjuntos de habilidades de la base de datos
Añadir SQL sin nivel a los conjuntos de habilidades de ciencia de datos */

const student = { 
    name: "David", 
    age: 25, 
    skills: 
{ 

      frontEnd: 
        [ 
            { skill: "HTML", level: 10 }, 
            { skill: "CSS", level: 8 },
            { skill: "JS", level: 8 }, 
            { skill: "React", level: 9 }, 
        ], 

    backEnd: 
    [ 
      { skill: "Node", level: 7 }, 
      { skill: "GraphQL", level: 8 }, 
    ], 

    dataBase: [{ skill: "MongoDB", level: 7.5 }], 

    dataScience: ["Python", "R", "D3.js"], 
  }, 
};

//const studentString = JSON.stringify(student);
//const student3 = JSON.parse(studentString);

//student3.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });

const student3 = {...student}

student3.skills.frontEnd.skill= "Bootstrap";
student3.skills.frontEnd.level= 8;

console.log(student3);

console.log(student);



/*
{ 
    name: 'David', 
    age: 25, 
    skills: { 
      frontEnd: [ 
        {skill: 'HTML',level: 10}, 
        {skill: 'CSS',level: 8}, 
        {skill: 'JS',level: 8}, 
        {skill: 'React',level: 9}, 
        {skill: 'BootStrap',level: 8} 
      ], 
      backEnd: [ 
        {skill: 'Node',level: 7}, 
        {skill: 'GraphQL',level: 8}, 
        {skill: 'Express',level: 9} 
      ], 
      dataBase: [ 
        { skill: 'MongoDB',level: 7.5}, 
        { skill: 'SQL',level: 8} 
      ], 
      dataScience: ['Python','R','D3.js','SQL'] 
    } 
  } 
  */