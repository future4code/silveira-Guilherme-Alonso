// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  console.log (num1 + num2)
  return num1 + num2
  
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("digite o valor da altura"))
  let largura = Number(prompt("digite o valor da largura"))
  let area = largura * altura
  console.log (area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt("Digite o ano em que estamos"))
let suaIdade = Number(prompt("Digite o ano do seu nascimento"))
let idade = anoAtual - suaIdade
console.log (idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let ICM = peso / (altura*altura)
  return ICM
}
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt("digite seu nome")
let idade = Number(prompt("digite sua idade"))
let email = prompt("digite seu e-mail")
console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("escolha uma cor")
  let cor2 = prompt("escolha uma cor")
  let cor3 = prompt("escolha uma cor")
  let arrayCores = [cor1, cor2, cor3]
  console.log (arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let saldoPositivo = custo/valorIngresso 
  console.log (saldoPositivo >= 1)
  return saldoPositivo 
 
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let comparar = string1.length === string2.length
  return comparar
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let salvar = array[0]
array[0] = array[array.length-1]
array[array.length-1] = salvar
return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
let caso1 = string1.toUpperCase()
let caso2 = string2.toUpperCase()
let iguais = caso1 === caso2
return iguais

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoCorrente = Number(prompt("Em que ano estamos?"));
  let anoDeNascimento = Number(prompt("Qual o seu ano de nascimento?"));
  let dataDoRG = Number(prompt("Qual a data de emissão do seu RG?"));
  let idadeAtual = anoCorrente - anoDeNascimento;
  let vencimentoRG = anoCorrente - dataDoRG;

  let primeroCaso = (idadeAtual <= 20 && vencimentoRG >= 5);
  let segundoCaso = ((20 > idadeAtual >=50) && vencimentoRG >= 10);
  let terceiroCaso = (idadeAtual > 50 && vencimentoRG >= 15)

  console.log(primeroCaso || segundoCaso || terceiroCaso)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let anosBissextos = ((ano % 400 === 0) && (ano !== 100) && (ano % 4 === 0 ));
  let anoNaoBissexto = ((ano % 4 === 0) && (ano % 100 !== 0))
  return anosBissextos || anoNaoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let primeiraVariavel = prompt("Você tem mais de 18 anos?");
  let segundaVariavel = prompt("Você possui ensino médio completo?");
  let terceiraVariavel = prompt("Você possui ensino médio completo?");

  let labenu = (primeiraVariavel === "sim" ) && (segundaVariavel === "sim") && (terceiraVariavel === "sim");
  console.log (labenu)

}