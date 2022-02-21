// Primeira parte 

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])   Resposta: "Matheus Nachtergaele"
// console.log(filme.elenco[filme.elenco.length - 1]) Resposta: Virginia Cavendish
// console.log(filme.transmissoesHoje[2]) Resposta: canal: "Globo", horario: "14h"

// Exercicio 2

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// a)
// console.log(cachorro)   
//     nome: "Juca", 
//     idade: 3, 
//     raca: "SRD"
// console.log(gato)
//     nome: "Juba", 
// 	idade: 3, 
// 	raca: "SRD"
// console.log(tartaruga)
//     nome: "Juco", 
// 	idade: 3, 
// 	raca: "SRD" 

//     b) os três pontos retomam as propriedades do objeto

//Segunda parte

// 1)

const pessoa = {
    nome: "Guilherme", 
    apelidos: ["Gui", "Guiga", "Botinhas"]
 }
 const outroApelido = {
    ...pessoa,
    apelidos: ["Guga", "Gago", "Boininha"]
}

function mensagem(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}

mensagem(outroApelido)

// 2)

const pessoa1 = {
	nome: "Bruno", 
    idade: 23, 
	profissao: "Instrutor"
}

const pessoa2 = {
	nome: "Carlos", 
    idade: 28, 
	profissao: "Desenvolvedor"
}

function alteracoes (dados) {
    let nome = dados.nome
    let numeroDeCaracteresDoNome = dados.nome.length
    let idade = dados.idade
    let profissao = dados.profissao
    let numeroDeCaracteresDaProfissao= dados.profissao.length
    let array = [nome, numeroDeCaracteresDoNome, idade, profissao, numeroDeCaracteresDaProfissao]
    console.log(array)
    return array
}
alteracoes(pessoa1)
alteracoes(pessoa2)

// 3)
// a)

let carrinho = []

//b) 

const fruta1 = { 
    nome: "Mamão",
    disponibilidade: true
}

const fruta2 = { 
    nome: "Pera",
    disponibilidade: false
}

const fruta3 = { 
    nome: "Cajamanga",
    disponibilidade: true
}

//c) e d)
function colocarNoCarrinho(objeto) {
    console.log(objeto)
    return carrinho.push(objeto)

}

colocarNoCarrinho(fruta1)
colocarNoCarrinho(fruta2)
colocarNoCarrinho(fruta3)

//Desafio 
//1)

function dadosDoUsuario() {
    let nomeDoUsuario = prompt("Digite seu nome de usuario")
    let idadeDoUsuario = Number(prompt("Digite sua idade"))
    let suaProfissao = prompt("Digite sua profissão")
    let objetos = {
        nome: nomeDoUsuario,
        idade: idadeDoUsuario,
        profissao: suaProfissao,
    }
    console.log(objetos)
    console.log(typeof objetos)
}
dadosDoUsuario()

//2)

const filme1 = {
    nome: "Matrix",
    anoDeLancamento: 2000,
}

const filme2 = {
    nome: "Beleza Americana",
    anoDeLancamento: 2000,
}
function comparacao(primeiroFilme, segundoFilme) {
    console.log(`O primeiro filme foi lançado antes do segundo? ${primeiroFilme.lancamento < segundoFilme.lancamento} `)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${primeiroFilme.lancamento === segundoFilme.lancamento}`)
}
comparacao(filme1, filme2)