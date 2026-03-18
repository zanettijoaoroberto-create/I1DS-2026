/*
🧠 Desafio: Descobrindo o Trimestre


Você deverá criar um programa em JavaScript que identifique em qual trimestre do ano um determinado mês está.


📌 Regras do desafio
O programa deve receber um número de 1 a 12 representando o mês.
Utilize a estrutura switch case para resolver.
Exiba no console em qual trimestre o mês informado se encontra:


Mês                     Trimestre
1, 2, 3                 Primeiro trimestre
4, 5, 6                 Segundo trimestre
7, 8, 9                 Terceiro trimestre
10, 11, 12              Quarto trimestre
*/


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
    
