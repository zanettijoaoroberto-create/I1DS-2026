/************************************************************/

function resultado(nota) {
  let frase;
  if (nota < 5) {
    frase = "Não Aprovado";
  } else if (nota >= 5 && nota <= 6.9) {
    frase = "Recuperação";
  } else {
    frase = "Aprovado";
  }
  return frase;
}
let nota = 10;
console.log("nota", nota, "-", resultado(nota));
nota = 7;
console.log("nota:", nota, "-", resultado(nota));
nota = 5;
console.log("nota", nota, "-", resultado(nota));
nota = 2;
console.log("nota", nota, "-", resultado(nota));
