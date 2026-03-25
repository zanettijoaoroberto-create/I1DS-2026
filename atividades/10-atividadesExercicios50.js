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
let dia = 1;
switch(dia) {
    case 1: console.log("Domingo"); break;
    case 2: console.log("Segunda"); break;
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
console.log("-----------------------------------------------------------");
console.log("-----------------------------------------------------------");
console.log("-----------------------------------------------------------");
console.log("-----------------------------------------------------------");
console.log("-----------------------------------------------------------");
console.log("-----------------------------------------------------------");
console.log("-----------------------------------------------------------");
console.log("-----------------------------------------------------------");