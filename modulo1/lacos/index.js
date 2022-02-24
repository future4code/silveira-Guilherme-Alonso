//Primeira parte

// 1.
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//a) está fazendo um laço que começa do valor 0 e vai somando o valor da variavel, mais 1, ou seja, soma o valor atribuido
//anteriormente mais 1 até chegar ao valor 4

//2.


//a) 19, 21, 23, 25, 27, 30

//b) 
//
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     let indice = lista.indexOf(numero)
//     console.log(`O indice de número ${numero} é ${indice}`)
//   }

// 3.
//const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// *
// **
// ***
// ****

//parte 2

//.1
const bichosDeEstimacao = +prompt("quantos bichos de estimação você tem?")
let nomeDosBichos = []
if(bichosDeEstimacao == 0){
    console.log("Que pena! Você pode adotar um pet!")
} else if (bichosDeEstimacao > 0){
    for (let i = 1; i <=bichosDeEstimacao; i++ ){
       const cadaBicho = prompt(`Digite o nome do seu PET número ${i}`)
       nomeDosBichos.push(cadaBicho)
    }
}
console.log(nomeDosBichos)

//2.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a
function imprimeValores(array) {
    for (let valor of array) {
        console.log(valor)
    }
}
console.log('Valores originais: ')
imprimeValores(arrayOriginal)

//b
function imprimeValoresDiv10(array) {
    for (let valor of array) {
        console.log(valor/10)
    }
}
console.log('Valores divididosPor10: ')
imprimeValoresDiv10(arrayOriginal)

//c
function imprimeValoresPares(array) {
    for (let valor of array) {
        if (valor % 2 == 0)
        console.log(valor)
    }
}
console.log('Valores pares: ')
imprimeValoresPares(arrayOriginal)

//d
