/* Escribe una función llamada convertArrayToObject que pueda convertir el array en un objeto
estructurado */

const students = [ 
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]], 
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]], 
]; 

function convertArrayToObject(array){
  let resultado=[];
  
  for (const item of array)
  {
    const [name,skills,scores]=item
    resultado.push({name,skills,scores})
  }
  
  return resultado;

};


console.log(convertArrayToObject(students));







