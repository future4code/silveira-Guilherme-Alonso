//1
// const usuarios = [
//    { nome: "Amanda Rangel", apelido: "Mandi" },
//    { nome: "Laís Petra", apelido: "Laura" },
//    { nome: "Letícia Chijo", apelido: "Chijo" }
//  ]
 
//  const novoArrayA = usuarios.map((item, index, array) => {
//     console.log(item, index, array)
//  }) 

//  Imprimirá o objeto e dentro dele o nome e o apelidos, na seuqnecia o numero do indice e array total

//2
// const usuarios = [
//    { nome: "Amanda Rangel", apelido: "Mandi" },
//    { nome: "Laís Petra", apelido: "Laura" },
//    { nome: "Letícia Chijo", apelido: "Chijo" },
//  ]
 
//  const novoArrayB = usuarios.map((item, index, array) => {
//     return item.nome
//  })
 
//  console.log(novoArrayB)

//  Imprimirá o nome dentro dos objetos e dentro de uma array

// const usuarios = [
//    { nome: "Amanda Rangel", apelido: "Mandi" },
//    { nome: "Laís Petra", apelido: "Laura" },
//    { nome: "Letícia Chijo", apelido: "Chijo" },
//  ]
 
//  const novoArrayC = usuarios.filter((item, index, array) => {
//     return item.apelido !== "Chijo"
//  })
 
//  console.log(novoArrayC)

//  imprimirá todos os objetos que não tenha o apelido Chijo

// parte 2

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

//a)
const apenasNomes = pets.map((item , indice, array) => {
   return item.nome
})

console.log (apenasNomes)
//b)
const apenasSalsicha = pets.filter((tipo) => {
   if (tipo.raca === "Salsicha") {
      return true
   }
})
console.log (apenasSalsicha)
//c) 
const poodleDesconto = pets.filter((tipo) => {
   if (tipo.raca === "Poodle") {
      return true
}
})

const personalisado =  poodleDesconto.map((item , indice, array) => {
   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})


console.log(personalisado)


//2

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a)
const nomesDosItens = produtos.map((item , indice, array) => {
   return item.nome
})
console.log(nomesDosItens)

//b)

const nomesDosItensEpreco = produtos.map((item , indice, array) => {
   return item.nome +" "+ Number(item.preco*0.95)
})
console.log(nomesDosItensEpreco)

//c)
const apenasBebidas = produtos.filter((tipo) => {
   if (tipo.categoria === "Bebidas") {
      return true
   }
})
console.log (apenasBebidas)

//d) 
const apenasYpe = produtos.filter((tipo) => {
   const selecionarYpe = tipo.nome.includes("Ypê")
      return selecionarYpe
   
})
console.log (apenasYpe)

//e
const personalisadoYpe =  apenasYpe.map((item , indice, array) => {
   return `Compre ${item.nome} por ${item.preco}] !`
})


console.log(personalisadoYpe)


//Desafio

const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]

//a)
const ordemAlfa = pokemons.map((item , indice, array) => {
   return item.nome
})

console.log(ordemAlfa.sort())

//b)
const ordemTipo = pokemons.filter((item , indice, array) => {
   const somenteTipo = item.tipo
   console.log(somenteTipo)
})
