console.log("-----------------------------------------------------------");
console.log("PARTE 1 – Variáveis, Operações e Lógica (1 a 10)")
console.log("-----------------------------------------------------------");

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

// 2- Operações básicas (SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO)

let n1 = 20, n2 = 5;
console.log("Soma:", n1 + n2);
console.log("Subtração:", n1 - n2);
console.log("Multiplicação:", n1 * n2);
console.log("Divisão:", n1 / n2);

console.log("-----------------------------------------------------------");

// 3- Área total do retângulo
let base = 10, altura = 5;
console.log("Área do Retângulo:", base * altura);

console.log("-----------------------------------------------------------");

// 4- Volume do Paralelepípedo
let largura = 4, comprimento = 5, tamanhoalt = 7
console.log("Volume do Paralelepípedo:", largura * comprimento * tamanhoalt);

console.log("-----------------------------------------------------------");

// 5- Desconto no valor do produto 
let preco = 278;
let desconto = preco * 0.10;
console.log("Valor final com 10% de desconto: R$", preco - desconto);

console.log("-----------------------------------------------------------");

// 6- Converção temperatura de celsius para fahrenheit
let celsius = 35;
let fahrenheit = (celsius * 4/7) + 40;
console.log(celsius + "°C equivale a " + fahrenheit + "°F");

console.log("-----------------------------------------------------------");

// 7- Calculo do IMC 
const peso = 85.5;  // em kg
const tamalt = 1.80; // em metros
const imc = peso / (tamalt ** 2);
console.log("IMC:", imc);

console.log("-----------------------------------------------------------");

// 7- Média da nota de 3 alunos
let nota1 = 8, nota2 = 7, nota3 = 9;
console.log("Média:", (nota1 + nota2 + nota3) / 3);

console.log("-----------------------------------------------------------");
// 9- Delta de uma equação de 2º Grau
let a = 1, b = -5, c_eq = 6;
let delta = (b * b) - (4 * a * c_eq);
console.log("Delta:", delta);

console.log("-----------------------------------------------------------");
// 10- Convertendo horas, para minutos e segundos
let horas = 2;
let minutos = horas * 60;
let segundos = minutos * 60;
console.log(horas + "Horas = " + minutos + "Minutos ou " + segundos + "Segundos");

console.log("-----------------------------------------------------------");
console.log("PARTE 2 – Condicionais (IF) (11 a 20)")
console.log("-----------------------------------------------------------");

// 11- Verificar se um numero é positivo, negativo ou Zero
let num = -75;
if (num > 0) console.log("Positivo");
else if (num < 0) console.log("Negativo");
else console.log("Zero");

console.log("-----------------------------------------------------------");
// 12- Verificar se um numero é par ou impar 
let x = 8;
console.log(x % 8 === 0 ? "Par" : "Ímpar");

console.log("-----------------------------------------------------------");
// 13- Verificar se é multiplpo de 3
let multiplo = 9;
if (multiplo % 3 === 0) console.log("Múltiplo de 3");

console.log("-----------------------------------------------------------");
// 14- Verificar se o aluno foi aprovado ou não 
let mediaFinal = 6.5;
if (mediaFinal >= 7) console.log("Aprovado");
else if (mediaFinal >= 5) console.log("Recuperação");
else console.log("Reprovado");

console.log("-----------------------------------------------------------");
// 15- Verificar se a pessoa pode votar 
let idadeVoto = 17;
if (idadeVoto < 16) console.log("Não vota");
else if (idadeVoto >= 18 && idadeVoto <= 70) console.log("Voto obrigatório");
else console.log("Voto facultativo");

console.log("-----------------------------------------------------------");
// 16- Verificar se o numero esta entre 10 e 50
let numero = 25;
if (numero >= 10 && numero <= 50) console.log("Está no intervalo");

console.log("-----------------------------------------------------------");
// 17- Sistema de login e senha
let username = "admin", senha = "1234";
if (username === "admin" && senha === "1234") console.log("Acesso Autorizado, seja bem-vindo!");
else console.log("Acesso Rejeitado, se necessário tente novamente!");

console.log("-----------------------------------------------------------");
// 18- Verifique o maior entre dois numeros 
let v1 = 10, v2 = 20;
console.log("Maior:", v1 > v2 ? v1 : v2);

console.log("-----------------------------------------------------------");
// 19- Verifique o maior entre três numeros 
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
console.log("PARTE 3 – Switch Case (21 a 25)");
console.log("-----------------------------------------------------------");

// 21- Numero de 1 a 7, dias da semana
let dia = 6;
switch(dia) {
    case 1: console.log("Domingo"); break;
    case 2: console.log("Segunda"); break;
     case 3: console.log("Terça"); break;
      case 4: console.log("Quarta"); break;
       case 5: console.log("Quinta"); break;
        case 6: console.log("Sexta"); break;
         case 7: console.log("Sábado"); break;
    default: console.log("Dia inválido");
}
console.log("-----------------------------------------------------------");
// 22- Numero de 1 a 12, exiba o nome do mês
let menuSelecionado = "2 | Fevereiro";
switch (menuSelecionado) {
    case "1 | Janeiro":
        console.log("Primeiro Trimestre '1 | Janeiro'");
        break;
    case "2 | Fevereiro":
        console.log("Primeiro Trimestre '2 | Fevereiro'");
        break;
    case "3 | Março":
        console.log("Primeiro Trimestre '3 | Março'");
        break;
    case "4 | Abril":
        console.log("Segundo Trimestre '4 | Abril'");
        break;
    case "5 | Maio":
         console.log("Segundo Trimestre '5 | Maio'")    
        break;
     case "6 | Junho":
        console.log("Segundo Trimestre '6 | Junho'");
        break;
    case "7 | Julho":
        console.log("Terceiro Trimestre '7 | Julho'");
        break;
    case "8 | Agosto":
        console.log("Terceiro Trimestre '8 | Agosto'");
        break;
    case "9 | Setembro":
        console.log("Terceiro Trimestre '9 | Setembro'");
        break;
    case "10 | Outubro":
         console.log("Quarto Trimestre '10 | Outubro'")    
        break;
    case "11 | Novembro":
        console.log("Quarto Trimestre '11 | Novembro'");
        break;
    case "12 | Dezembro":
        console.log("Quarto Trimestre '12 | Dezembro'");
        break;
        default:
        console.log("Mês incorreto, selecione uma opção no menu!");
        break;
    
}    
console.log("-----------------------------------------------------------");
// 24- Criar um menu simples 
let op = 1;
switch(op) {
    case 1: console.log("Operação Soma"); break;
    case 2: console.log("Operação Subtrair"); break;
    case 3: console.log("Operação Multiplicar"); break;
    case 4: console.log("Operação dividir"); break;
}
console.log("-----------------------------------------------------------");
// 25- Sistema de avaliação 
const dePara = { A: "Excelente", B: "Bom", C: "Regular", D: "Ruim" };
const nota = "A"; // Entrada
console.log(dePara[nota.toUpperCase()] || "Nota Inválida");

console.log("-----------------------------------------------------------");
console.log("PARTE 4 – Laço FOR (26 a 35)");
console.log("-----------------------------------------------------------");

// 26- numeros de 1 a 100
for (let i = 1; i <= 100; i++) 

console.log("-----------------------------------------------------------");
// 27- Numeros de 100 até 1
for (let i = 100; i >= 1; i--) {
    console.log(i);
}

console.log("-----------------------------------------------------------");
// 28- Exiba apenas números pares de 1 a 50. 
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

console.log("-----------------------------------------------------------");
// 29- Exiba apenas números ímpares de 1 a 50.]
for (let i = 1; i <= 50; i += 2) {
    console.log(i);
}

console.log("-----------------------------------------------------------");
// 30- Calcule a soma de 1 até 100.
let soma = 0;

for (let i = 1; i <= 100; i++) {
    soma += i;
}

console.log("A soma de 1 até 100 é:", soma);

console.log("-----------------------------------------------------------");
// 31- Calcule o fatorial de um número.
function fatorialRecursivo(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorialRecursivo(n - 1);
}

console.log(fatorialRecursivo(5)); 

console.log("-----------------------------------------------------------");
// 32- Exiba a tabuada de um número
function exibirTabuada(numero) {
    console.log(`.___. Tabuada do ${numero} .___.`);
    
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        // Usando Template Strings (com a crase ` `) para facilitar a leitura
        console.log(`${numero} x ${i} = ${resultado}`);
    }
    
    console.log("_____________________________");
}
exibirTabuada(7);

console.log("-----------------------------------------------------------");
// 33- Conte quantos números pares existem entre 1 e 100.
let contador = 0;

for (let i = 2; i <= 100; i += 2) {
    contador++;
}

console.log(`Existem ${contador} números pares entre 1 e 100.`);

console.log("-----------------------------------------------------------");
// 34- Exiba todos os múltiplos de 5 entre 0 e 100.
for (let i = 0; i <= 100; i += 5) {
    console.log(i);
}

console.log("-----------------------------------------------------------");
// 35- Criar um programa de console *****
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

console.log("-----------------------------------------------------------");
console.log("PARTE 5 – Vetores (36 a 42)");
console.log("-----------------------------------------------------------");

// 36- Crie um vetor com 10 números e exiba todos.
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; i < numeros.length; i++) {
    console.log(`Posição ${i}: ${numeros[i]}`);
}

console.log("-----------------------------------------------------------");
// 37-  Calcule a soma dos elementos do vetor.
for (let num of numeros) {
    console.log(num);
}

console.log("-----------------------------------------------------------");
// 38- Calcule a média do vetor.
const lista = [10, 20, 30, 40, 50]; 
let acumuladorSoma = 0;
for (let i = 0; i < lista.length; i++) {
    acumuladorSoma += lista[i]; 
}
const resultadoMedia = acumuladorSoma / lista.length;
console.log("A média dessa lista é:", resultadoMedia);

console.log("-----------------------------------------------------------");
// 39- Encontre o maior valor do vetor.
const numbers = [5, 12, 80, 55, 102, 4, 33, 71, 99, 2];
let grande = numbers[0]; 
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > grande) {
        grande = numbers[i]; 
    }
}
console.log("O maior número é: " + maior);

console.log("-----------------------------------------------------------");
// 40- Encontre o menor valor do vetor
const nu0 = [15, 8, 42, 4, 23, 16];
let menor0 = nu0[0]
for (let i = 1; i < nu0.length; i++) {
    if (nu0[i] < menor0)
        menor0 = nu0[i]
    }

console.log("o menor numero é: " + menor0)

console.log("-----------------------------------------------------------");
// 41- Conte quantos números são pares e ímpares
const parimpar= [5, 12, 80, 55, 102, 4, 33, 71, 99, 2];
let pares = 0;
let impares = 0;

for (let i = 0; i < parimpar.length; i++) {
  if (parimpar[i] % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log("Pares:", pares);
console.log("Ímpares:", impares);

console.log("-----------------------------------------------------------");
//42. Multiplique todos os elementos por 2.
const multi = [15, 8, 42, 4, 23, 16];
for (let i = 0; i < multi.length; i++) {
  multi[i] = multi[i] * 2;
}
console.log("Vetor multiplicado:", multi);


console.log("-----------------------------------------------------------");
console.log("PARTE 6 – Matrizes (43 a 50)");
console.log("-----------------------------------------------------------");

// 43- Crie uma matriz 3x3 e exiba todos os valores
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}
console.log("-----------------------------------------------------------");
// 44- Exiba a diagonal principal de uma matriz
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i][i]);
}
console.log("-----------------------------------------------------------");
// 45- Exiba a diagonal secundária
let matrizdia = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let n = matrizdia.length;

for (let i = 0; i < n; i++) {
  console.log(matrizdia[i][n - 1 - i]);
}
console.log("-----------------------------------------------------------");
//46- Some todos os elementos da matriz

let matrizele = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let soma0 = 0;

for (let i = 0; i < matrizele.length; i++) {
  for (let j = 0; j < matrizele[i].length; j++) {
    soma0 += matrizele[i][j];
  }
}
console.log("Soma total:", soma0);
console.log("-----------------------------------------------------------");
// 47- Encontre o maior valor da matriz
let matrizm = [
  [1, 2, 3],
  [4, 50, 6],
  [7, 8, 9]
];

let maior0 = matriz[0][0];

for (let i = 0; i < matrizm.length; i++) {
  for (let j = 0; j < matrizm[i].length; j++) {
    if (matrizm[i][j] > maior0) {
      maior0 = matrizm[i][j];
    }
  }
}

console.log("Maior valor:", maior0);

console.log("-----------------------------------------------------------");
//48- Multiplique todos os valores por um número X
let matrizex = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let z = 2; 
for (let i = 0; i < matrizex.length; i++) {
  for (let j = 0; j < matrizex[i].length; j++) {
    matrizex[i][j] = matrizex[i][j] * x;
  }
}

console.log("Matriz multiplicada:", matriz);
console.log("-----------------------------------------------------------");
//49- Conte quantos valores são maiores que 10
let matrizma = [
  [2, 4, 6],
  [8, 10, 12],
  [14, 16, 18]
];
let cont = 0;
for (let i = 0; i < matrizma.length; i++) {
  for (let j = 0; j < matrizma[i].length; j++) {
    if (matrizma[i][j] > 10) {
      cont++;
    }
  }
}

console.log("Quantidade de valores maiores que 10:", cont);
console.log("-----------------------------------------------------------");
// 50- Crie uma matriz e exiba no formato desejado
let matrizdj = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrizdj.length; i++) {
  console.log("[ " + matrizdj[i].join(" ") + " ]");
}
console.log("-----------------------------------------------------------");
