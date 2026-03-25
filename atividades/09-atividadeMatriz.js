// Matrizes!
// 1-Armazenando a matriz
let matrizM = [
    [8, 1, 3],
    [2, 9, 1],
    [4, 6, 2]
];

let x = 2; // Valor multiplicador

// 2- Imprimindo a matriz original
console.log("Matriz Original:");
for (let i = 0; i < matrizM.length; i++) {
    let linha1 = "";
    for (let j = 0; j < matrizM[i].length; j++) {
        linha1 += matrizM[i][j] + " ";
    }
    console.log(linha1);
}

console.log("----------------------------");
console.log("Multiplicando a matriz: ");
console.log("----------------------------");

// 3- Multiplicando todos os elementos e 4. Imprimindo o resultado
console.log("Matriz Resultante:");
for (let i = 0; i < matrizM.length; i++) {
    let Resultado = "";
    for (let j = 0; j < matrizM[i].length; j++) {
        // Realiza a multiplicação
        matrizM[i][j] = matrizM[i][j] * x;
        // Concatena para exibir em formato de matriz no console
        Resultado += matrizM[i][j] + " ";
    }
    console.log(Resultado);
}
