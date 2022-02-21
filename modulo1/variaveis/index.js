//let a = 10
//let b = 10

//console.log(b)
// resposta do console = 10//

//b = 5
//console.log(a, b)
//resposta do console = 10, 5//

//let a = 10
//let b = 20
//c = a
//b = c
//a = b

//console.log(a, b, c)
// resposta = 10, 10, 10)//

//let horasTrablhadas = prompt("Quantas horas você trabalha por dia?")
//let valorDiario = prompt("Quanto você recebe por dia?")
//alert(`Voce recebe ${horasTrablhadas/valorDiario} por hora`)//

// segunda parte do exercicio

let nome;
let idade;

console.log("Esta variável 'nome' é", typeof nome);
console.log("Esta variável 'idade' é", typeof nome);

//imprime variável indefinida, pois não foi atribuído valor para ela. 

nome = String (prompt("Qual seu nome?"));
idade = Number (prompt("Qual sua idade?"));

console.log("Esta variável 'nome' é", typeof nome);
console.log("Esta variável 'idade' é", typeof idade);

//imprime variável nome tipo string e idade tipo number. 

console.log ("Olá,", nome, "você tem", idade, "anos.");

// a resposta do item "d" é pq não atribui valores para ele o por isso da resposta

//parte 2
let pergunta1;
let pergunta2;
let pergunta3;
pergunta1 = String (prompt("Você gosta de música?"));
pergunta2 = String (prompt("Você come carne?"));
pergunta1 = String (prompt("Você tem filhos?"));

//parte 3
let a = 10
let b = 25
let c = a

console.log("O novo valor de a é", b)
console.log("O novo valor de b é", c)

//Exercicio extra
let valorUm = Number (prompt("Digite um número inteiro"));
let valorDois = Number (prompt("Digite um número inteiro"));
console.log (valorUm + valorDois);
console.log (valorUm * valorDois);

console.log (typeof valorUm, typeof valorDois)