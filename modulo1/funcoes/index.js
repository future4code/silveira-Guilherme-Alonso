
// Primeira parte

//EXERCICIO 1
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a. 10 , 50
// não imprimirá nada

//EXECICIO2

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. função transforma o texto inserido em letras minusculas e verifica se o texto inserido contem a palavra cenoura
// b. I. true II. True III. True

// Parte 2

//1.




function fraseTrocada(nome, idade, cidade, profissao){

 const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
  return frase;
} 

console.log(fraseTrocada("Guilherme", "34", "São Paulo", "Estudante"));


// 2.
//a.
function doisNumeros(a , b) {
    const pn = a + b;
    return pn;
}

console.log(doisNumeros(3, 4))

//b. 
function doisNumerosB(a , b) {
    const pn2 = a >= b;
    return pn2;
}
console.log(doisNumerosB(3, 4))

//c.
function doisNumerosC(a) {
     const p = (a % 2) == 0
    return p;
}
console.log(doisNumerosC(4 ))

//d
function mensagem(texto) {
    console.log(`${texto.length}
${texto.toUpperCase()}`);
 };
 
 mensagem('Minha gata tem um namorado em Mauá');

 //3

 
 function soma(x, y) {
    return x + y;
 };
 
 function subtrcao(x, y) {
    return x - y;
 };
 
 function multiplicacao(x, y) {
    return x * y;
 };
 
 function fdivisao(x, y) {
    return x / y;
 };
 
 let n = [];
 n[0] = +prompt("Pprimeiro número:");
 n[1] = +prompt("Primeiro número:");
 
 console.log(`Números inseridos: ${n[0]} e ${n[1]}
 ${n[0]} + ${n[1]} = ${soma(n[0], n[1])}
 ${n[0]} - ${n[1]} = ${subtrcao(n[0], n[1])}
 ${n[0]} x ${n[1]} = ${multiplicacao(n[0], n[1])}
 ${n[0]} : ${n[1]} = ${divisao(n[0], n[1])}`);
 