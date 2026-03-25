// 1- Introdução de criando variáveis
//Criando variáveis com "var" (var nome_variavel = <valor>;)
var nome = "João Roberto";

//Demonstrando no console somente a variável
console.log(nome);

//Demonstrando no console texto + variável, com virgula
console.log("Meu nome é", nome);

//Criando variável de idade e atribuindo uma idade para ela
var idade = 16;

//Demonstrando no console várias informações e pulo de linha com \n
console.log("Meu nome é", nome, "e eu tenho", idade, "anos \n");

//Linha de divisão

console.log("-----------------------------------------------------------");

// 2- Operações básicas
let n1 = 20, n2 = 5;
console.log("Soma:", n1 + n2);
console.log("Subtração:", n1 - n2);
console.log("Multiplicação:", n1 * n2);
console.log("Divisão:", n1 / n2);

console.log("-----------------------------------------------------------");

// 3- Área Retângulo
let base = 10, altura = 5;
console.log("Área do Retângulo:", base * altura);

console.log("-----------------------------------------------------------");

// 4- Volume Paralelepípedo
let largura = 2, comprimento = 5, alt = 3;
console.log("Volume:", largura * comprimento * alt);

console.log("-----------------------------------------------------------");

// 5- Desconto
let preco = 100;
let desconto = preco * 0.10;
console.log("Valor final com 10% OFF: R$", preco - desconto);

console.log("-----------------------------------------------------------");

// 6- Converter celsius para Fahrenheit
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C equivale a " + fahrenheit + "°F");

console.log("-----------------------------------------------------------");

// 7- Média das notas alunos
let nota1 = 8, nota2 = 7, nota3 = 9;
console.log("Média:", (nota1 + nota2 + nota3) / 3);

console.log("-----------------------------------------------------------");
// 9- Delta
let a = 1, b = -5, c_eq = 6;
let delta = (b * b) - (4 * a * c_eq);
console.log("Delta:", delta);

console.log("-----------------------------------------------------------");

// 10- Horas para Minutos/Segundos
let horas = 2;
let minutos = horas * 60;
let segundos = minutos * 60;
console.log(horas + "h = " + minutos + "min ou " + segundos + "s");

console.log("-----------------------------------------------------------");
console.log("PARTE 2 DOS EXERCICIOS");
console.log("-----------------------------------------------------------");
/*******************************************************/
//      PARTE 2 
/*******************************************************/

console.log("-----------------------------------------------------------");

// 11- Positivo/Negativo
let num = -5;
if (num > 0) console.log("Positivo");
else if (num < 0) console.log("Negativo");
else console.log("Zero");

console.log("-----------------------------------------------------------");

// 12- Par e Ímpar
let x = 4;
console.log(x % 2 === 0 ? "Par" : "Ímpar");

console.log("-----------------------------------------------------------");

// 13- Múltiplo de 3
let m = 9;
if (m % 3 === 0) console.log("Múltiplo de 3");

console.log("-----------------------------------------------------------");

// 14- Status Aluno
let mediaFinal = 6.5;
if (mediaFinal >= 7) console.log("Aprovado");
else if (mediaFinal >= 5) console.log("Recuperação");
else console.log("Reprovado");

console.log("-----------------------------------------------------------");

// 15- Votação (Brasil)
let idadeVoto = 17;
if (idadeVoto < 16) console.log("Não vota");
else if (idadeVoto >= 18 && idadeVoto <= 70) console.log("Voto obrigatório");
else console.log("Voto facultativo");

console.log("-----------------------------------------------------------");
// 16- Entre 10 e 50
let numero = 25;
if (numero >= 10 && numero <= 50) console.log("Está no intervalo");

console.log("-----------------------------------------------------------");

// 17- Login
let username = "admin", senha = "1234";
if (username === "admin" && senha === "1234") console.log("Acesso Autorizado, seja bem-vindo!");
else console.log("Acesso Rejeitado, se necessário tente novamente");

console.log("-----------------------------------------------------------");

// 18- Maior de dois
let v1 = 10, v2 = 20;
console.log("Maior:", v1 > v2 ? v1 : v2);

console.log("-----------------------------------------------------------");

// 19- Maior de três
let a1 = 5, a2 = 15, a3 = 10;
let maior = a1;
if (a2 > maior) maior = a2;
if (a3 > maior) maior = a3;
console.log("O maior entre os três é:", maior);

console.log("-----------------------------------------------------------");

// 20- Classificação de idade
let pIdade = 16;
if (pIdade <= 12) console.log("Criança");
else if (pIdade <= 17) console.log("Adolescente");
else if (pIdade <= 59) console.log("Adulto");
else console.log("Idoso");

console.log("-----------------------------------------------------------");
console.log("PARTE 3 DOS EXERCICIOS");
console.log("-----------------------------------------------------------");

// 21- Dias da semana
let dia = 1;
switch(dia) {
    case 1: console.log("Domingo"); break;
    case 2: console.log("Segunda"); break;
    default: console.log("Dia inválido");
}
console.log("-----------------------------------------------------------");

// 23- Trimestre
let mesT = 5;
switch(mesT) {
    case 1: case 2: case 3: console.log("1º Trimestre"); break;
    case 4: case 5: case 6: console.log("2º Trimestre"); break;
    case 7: case 8: case 9: console.log("3º Trimestre"); break;
    case 10: case 11: case 12: console.log("4º Trimestre"); break;
}

console.log("-----------------------------------------------------------");

// 24- Menu de inicio
let op = 1;
switch(op) {
    case 1: console.log("Operação Soma"); break;
    case 2: console.log("Operação Subtrair"); break;
}
console.log("-----------------------------------------------------------");
console.log("PARTE 4 DOS EXERCICIOS");
console.log("-----------------------------------------------------------");

// 26- De 1 a 100
for (let i = 1; i <= 100; i++) { /* console.log(i) */ }

console.log("-----------------------------------------------------------");

// 30- Soma 1 a 100
let somaTotal = 0;
for (let i = 1; i <= 100; i++) {
    somaTotal += i;
}
console.log("Soma de 1 a 100:", somaTotal);

console.log("-----------------------------------------------------------");

// 31- Fatorial
let fatNum = 5, resultadoFat = 1;
for (let i = fatNum; i > 1; i--) {
    resultadoFat *= i;
}
console.log("Fatorial de 5:", resultadoFat);

console.log("-----------------------------------------------------------");

// 35- Triângulo
for (let i = 1; i <= 5; i++) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
        linha += "*";
    }
    console.log(linha);
}

console.log("-----------------------------------------------------------");
console.log("PARTE 5 DOS EXERCICIOS");
console.log("-----------------------------------------------------------");
/********************************************************/
//                  PARTE 5
/*******************************************************/

let vetor = [10, 25, 30, 45, 5, 12, 18, 90, 3, 22];

// 37- Soma dos elementos
let somaV = 0;
for (let i = 0; i < vetor.length; i++) {
    somaV += vetor[i];
}
console.log("Soma Vetor:", somaV);

console.log("-----------------------------------------------------------");

// 39- Maior valor
let maiorV = vetor[0];
for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maiorV) maiorV = vetor[i];
}
console.log("Maior valor:", maiorV);

console.log("-----------------------------------------------------------");
// 42- Multiplicar por 2 
let novoVetor = [];
for (let i = 0; i < vetor.length; i++) {
    novoVetor[i] = vetor[i] * 2;
}
console.table(novoVetor);

console.log("-----------------------------------------------------------");
console.log("PARTE 6 DOS EXERCICIOS");
console.log("-----------------------------------------------------------");
/********************************************************/
//                   PARTE 6
/********************************************************/

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("-----------------------------------------------------------");

// 44- Diagonal Principal
console.log("Diagonal Principal:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i][i]);
}
console.log("-----------------------------------------------------------");

// 46- Soma todos
let somaM = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        somaM += matriz[i][j];
    }
}
console.log("Soma Matriz:", somaM);

console.log("-----------------------------------------------------------");

// 50- Formatação Visual
for (let i = 0; i < 3; i++) {
    let linhaStr = "[ ";
    for (let j = 0; j < 3; j++) {
        linhaStr += matriz[i][j] + " ";
    }
    linhaStr += "]";
    console.log(linhaStr);
}