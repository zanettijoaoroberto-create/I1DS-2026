// Operadores de incremento e decremento | pré e pós-incremento
// incremento => somar algo a alguma variável
// decremento => subtrair algo de alguma variável 

let idade = 16
console.log(idade);

// idade = idade  + 1; // somei 1 na idade 
idade++
console.log(idade);
idade++
console.log(idade);
console.log("------------------");
// idade = idade - 1; // subtraí 1 da idade
idade--;
console.log(idade);
idade--;
console.log(idade);
console.log("------------------");


let novaIdade = idade + 1; // idade++ soma na mesma variável 
console.log("Idade", idade, "| Nova idade:", novaIdade);

novaIdade = ++idade;
console.log("Idade", idade, "| Nova idade:", novaIdade);     
                                                                                                                                                                                                                                                                                                                      