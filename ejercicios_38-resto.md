# Módulo de JS Básico

## Ejercicios

38. Generar un array de 20 elementos con números aleatorios no repetidos entre si.

39. Crea un objeto llamado **facebookProfile**. El objeto debe tener 3 propiedades:

- Tu nombre (**name**)
- El número de amigos que tienes (**friends**)
- Un array de mensajes que hayas enviado (**messages**)

  El objeto debe tener 4 métodos:

- postMessage(message) - Añade un nuevo mensaje al array de mensajes.
- deleteMessage(index) - Elimina un mensaje del array de mensajes según el índice dado.
- addFriend() - Incrementa en 1 el número de amigos.
- removeFriend() - Decrementa en 1 el número de amigos.

40. Se tienen los costes de producción de tres departamentos (dulces, bebidas y conservas) correspondientes a los 12 meses del año anterior. Construir algoritmo que proporcione:

- ¿En qué mes se registró el mayor coste de producción de dulces?
- Promedio anual de los costes de producción de bebidas.
- ¿En qué mes se registró el mayor coste de producción en bebidas, y en qué mes el menor coste?
- ¿Cuál fue el que tuvo menor coste de producción en diciembre?

41. Dadas las siguientes variables:

```js
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
```

- Desestructurar y asignar los elementos del array de constantes para e, pi, gravedad, temperaturaCorporal y ebullicionAgua.

- Desestructurar y asignar los elementos del array de países a fin, est, sw, den, nor

- Desestructurar el objeto rectángulo por sus propiedades o keys.

- Iterar a través del array de usuarios y obtener todas las keys del objeto utilizando la desestructuración.

- Encuentra las personas que tienen menos de dos habilidades.

- Desestructurar el objeto países e imprimir nombre, capital, población e idiomas de todos los países.

42. Un desarrollador junior estructura el nombre del estudiante, las habilidades y la puntuación en un array de arrays que puede no ser fácil de leer. Desestructure la siguiente matriz nombre a nombre, array de habilidades a habilidades, array de puntuaciones a puntuaciones, puntuación de JavaScript a jsScore y puntuación de React a reactScore variable en una línea.

```js
const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
console.log(name, skills, jsScore, reactScore);
```

```sh
David (4) ["HTM", "CSS", "JS", "React"] 90 95
```

43. Escribe una función llamada _convertArrayToObject_ que pueda convertir el array en un objeto estructurado.

```js
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

console.log(convertArrayToObject(students))[
  ({
    name: "David",
    skills: ["HTM", "CSS", "JS", "React"],
    scores: [98, 85, 90, 95],
  },
  {
    name: "John",
    skills: ["HTM", "CSS", "JS", "React"],
    scores: [85, 80, 85, 80],
  })
];
```

44. Copia el objeto estudiante a newStudent sin mutar el objeto original. En el nuevo objeto añade lo siguiente:

- Añadir Bootstrap con el nivel 8 a los conjuntos de habilidades de front end
- Añadir Express con nivel 9 a los conjuntos de habilidades del back end
- Añadir SQL con nivel 8 a los conjuntos de habilidades de la base de datos
- Añadir SQL sin nivel a los conjuntos de habilidades de ciencia de datos

```js
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
```

La salida del objeto copiado debería tener este aspecto:

```js
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

```
