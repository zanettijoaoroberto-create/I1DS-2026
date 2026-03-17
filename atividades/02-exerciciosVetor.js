// Criando Variaveis do tipo Array (Vetor)

var frutas =  ["Banana", "Maçã", "Pera", "Uva", "Morango"];

// Imprimindo os dados em forma de linha
console.log(frutas);
// Imprimindo os dados em forma de tabelas 
console.table(frutas);

// length -> "Tamanho" do Array (Quantidade de Elementos)
console.log("O Vetor tem", frutas.length, "elementos");

// Imprimindo Elemento a partir do indice
console.log(frutas[2]);

// push -> Adiciona um novo elemento no final da fila 
frutas.push("Banana");
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

// unshift -> Adiciona um novo elemento no inicio da fila
frutas.unshift("Maçã");
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");


//  Obter um Elemento a partir do indice 
console.log("1ª posição:",frutas[0]);
console.log("4ª posição:", frutas[3]);
console.log("20ª posição:",frutas[20]);

// pop -> Remover um elemento final do vetor (Ultimo elemento)
frutas.pop();
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");


// shift ->  Remover um elemento do inicio do vetor (Primeiro elemento)
frutas.shift();
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

// splice -> Remove um elemento a partir de um indice, e tambem precisa ser informada a quantidade de registro a ser excluido a partir do indice.
frutas.splice(1, 1);// Remove somente o segundo item da lista
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

// Adicionar mais elemento ao Vetor
frutas.push("Pera");
frutas.push("Uva");
frutas.push("Morango");

// Procurar um elemento a partir do nome (descrição)
// indexOf(procurado) -> retorna o indice do elemento vetor 
let procurado = "Pera"
let indice = frutas.indexOf(procurado);
console.log("O ", procurado, "esta no indice:", indice);

// indexOf(procurado) -> retorna -1 caso nao encontre o elemento
procurado = "Uva"
indice = frutas.indexOf(procurado);
console.log("O ", procurado, "esta no indice:", indice);

// Excluir um elemento com base em seu nome 
// 1º localizar o indice do elemento a partir do nome
// 2º excluir o registro com base no indice retornado 

procurado = "Morango"
indice = frutas.indexOf(procurado)
console.log("O ", procurado, "esta no indice:", indice);
frutas.splice(indice, 1);
console.table(frutas);

// Alterar o valor de um elemento a partir do indice
frutas[1] = "Goiaba";
console.table(frutas);

// slice -> Criar uma cópia do Vetor 
let novalista = frutas.slice(); // Cópia completa do vetor dinos 
console.table(frutas);

let listaParcial = frutas.slice(2, 5)// Cria uma cópia do vetor dinos a partir do indice onde começa e onde termina a copia
console.table(listaParcial);
