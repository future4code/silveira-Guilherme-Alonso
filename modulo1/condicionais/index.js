//Exercicio 1
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//a) Ver se um número é par ou ímpar
//b) Se um numero for par
//c) se um numero for impar

//Exercício 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) para dar o preço correspondente a determinada fruta
//b) "O preço da fruta  Maçã  é  R$  2.25
//c) "O preço da fruta  Pêra  é  R$  5

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a) pedindo para digitar um número
//b) em ambos os caso acusara um erro
//c) Há erro pois "let mensagem" está dentro do escopo e o console não consegue acessa-la para imprimir

//Parte 2
//1
//a)
let idadeAtual = prompt("Qual a sua idade atual?")
//b)
let idadeParaDirigir = Number(idadeAtual)
//c)
if (idadeParaDirigir >= 18){
  console.log("Você pode dirigir")
} else{
  console.log("Você não pode dirigir")
}

//2

let horaDeEstudo = prompt("Em qual horario você estuda? Responda: \nM para matutino \nV para vespertino \nN para noturno")

if(horaDeEstudo === "M"){
  console.log("Bom dia")
} else if(horaDeEstudo === "V"){
  console.log("Boa Tarde")
} else if(horaDeEstudo === "N"){
  console.log("Boa Noite")
}

//3
switch(horaDeEstudo){
  case "M":
    console.log("Bom dia")
    break
  case "V":
    console.log("Boa Tarde")
    break
  case "N":
    console.log("Boa Noite")
    break
}

//4

//4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um 
// filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. 
// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço
//  do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no
//   console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

let generoDoFilme = prompt("Qual o genero do filme?").toLowerCase()
let precoDoIngresso = Number(prompt("Qual o valor do ingresso"))

if ( generoDoFilme = `fantasia` && precoDoIngresso <= 15){
  console.log("Bom filme")
} else {
  console.log ("Escolha outro filme :(")
}