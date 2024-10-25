// Modificar Arrays
const tecnologias = [20, 30, 40];

console.log(tecnologias);

const lenguajes = ["JAVA", "C++", "Python", "React"];

lenguajes[10] = "HTML";
console.log(lenguajes);

lenguajes.push("Nest.js");
console.log(lenguajes);

const nuevoArray = [...lenguajes, "JavaScript"];
console.log(nuevoArray);

const lenguajes2 = lenguajes.filter(function (variable) {
  if (variable !== "C++") {
    return variable;
  }
});

console.table(lenguajes2);

//Map

const lenguajes3 = lenguajes.map(function (variable) {
  if (variable === "NEst.js") {
    return "JavaScript";
  } else {
    return variable;
  }
});
