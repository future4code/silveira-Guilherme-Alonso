// let array
// console.log('a. ', array) 

//Resposta: indefinido

// array = null
// console.log('b. ', array)

//Resposta : Nulo

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// Resposta : 11

// let i = 0
// console.log('d. ', array[i])

//Resposta : "3"

// array[i+1] = 19
// console.log('e. ', array)

//Resposta: [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor)

//Resposta: Não entendi

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Resposta: "SUBI NUM ÔNIBUS EM MIRROCOS" 29

//Parte 2

//a
const emailDoUsuario = prompt("Digite seu nome");
const nomeDoUsuario = prompt ("Digite seu nome");

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

const comidasFavoritas = ["ovo", "pato", "coelho", "ostra", "chucrute"]
console.log(comidasFavoritas);

//b

console.log(`Essas são as minhas comidas preferidas:
- ${comidasFavoritas[0]}
- ${comidasFavoritas[1]}
- ${comidasFavoritas[2]}
- ${comidasFavoritas[3]}
- ${comidasFavoritas[4]}`);

//c

comidasFavoritas[1] = prompt("Qual a sua comida favorita?");

console.log(comidasFavoritas);

//Parte 3

//a 
let listaDeTarefas = [];

//b
listaDeTarefas[0] = prompt('Qual sua 1ª tarefa do dia?');
listaDeTarefas[1] = prompt('Qual sua 2ª tarefa do dia?');
listaDeTarefas[2] = prompt('Qual sua 3ª tarefa do dia?');

// c)
console.log(`Minha lista de tarefas diárias:
1 - ${listaDeTarefas[0]}
2 - ${listaDeTarefas[1]}
3 - ${listaDeTarefas[2]}`);

//d
let removerTarefa = +prompt(`Qual tarefa você já concluiu?
1 - ${listaDeTarefas[0]}
2 - ${listaDeTarefas[1]}
3 - ${listaDeTarefas[2]}`);

// e)
listaDeTarefas.splice(removerTarefa - 1, 1);

console.log(`Tarefas ainda não concluídas:
1 - ${listaDeTarefas[0]}
2 - ${listaDeTarefas[1]}`);