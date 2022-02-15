// Primeira parte do exercicio
//1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)  // False

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // False

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)  // True

console.log("d. ", typeof resultado) // Boolean

//2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // Os numeros não se somariam, seriam colocados na sequencia pois estão em String

//3 Deve-se converter para Number antes do prompt.

// Segunda parte do Exercício

//1

const minhaIdade = Number(prompt("minha idade é:"))
const idadeAmigo = Number(prompt("Idade do meu amigo é:"))

console.log(minhaIdade > idadeAmigo)

//2

const numeroPar = Number(prompt("Digite um número par:"))

console.log(numeroPar % 2) 

// c Imprime sempre Zero

// d Imprime sempre 1

//3

const anosEmMeses = Number(prompt("Minha idade é:"))

console.log("Minha idade em meses é", anosEmMeses * 12)
console.log("Minha idade em dias é", anosEmMeses * 365)
console.log("Minha idade em horas é", anosEmMeses * 365 * 24)

//4

const num1 = Number(prompt("digite um numero qualquer"))
const num2 = Number(prompt("digite outro numero qualquer"))

console.log("O primeiro numero é maior que o segundo?", num1 > num2)
console.log("O primeiro numero é igual ao segundo?", num1 === num2)
console.log("O primeiro numero é divisível pelo segundo?", num1 / num2 !== 0)
console.log("O primeiro numero é divisível pelo segundo?", num2 / num1 !== 0)

//Desafio

//1


// 2

let QuilowattHora = Number(prompt("Quilowatt-hora")) * 0.05 
console.log(QuilowattHora)
console.log ("Desconto de 15%", QuilowattHora * 0.85)

//3

//a.
let lb = Number
let kg = Number(prompt("digite um peso qualquer em KG")) 


console.log("o peso em libras um peso em KG", kg = lb * 0.45)

//b 
