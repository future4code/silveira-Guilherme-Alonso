// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a,b){
        return a-b;
    })
    
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    
     return array.filter(pares => (pares %2)== 0)
  

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novaArray = []
    for (let numero of array) {
        if (numero % 2 === 0) {
            numero = numero**2
            novaArray.push(numero)
        }
    }
    return novaArray

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max(...array)
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const novoArrayPares = []
    for (let i = 0; novoArrayPares.length < n; i++) {
        if (i % 2 == 0) {
      novoArrayPares.push(i)
    }
    }
    return novoArrayPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ((ladoA === ladoB) && (ladoB ===ladoC)) {
        return "Equilátero"
    } else if (((ladoA === ladoB) && (ladoA === ladoB)!= ladoC) ||((ladoA === ladoC) && (ladoA === ladoC)!= ladoB) ||((ladoB === ladoC) && (ladoB === ladoC)!= ladoA) ){
        return "Isósceles"
    } else if (ladoA != ladoB != ladoC){
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   
  var max = Math.max.apply(null, array); // pega o valor máximo
  array.splice(array.indexOf(max), 1); // remove o valor máximo
  var secondmax = Math.max.apply(null, array); // pega o 2o valor máximo
  array.splice(0,0,max); // devolve o valor máximo

  var min = Math.min.apply(null, array); // pega o valor mínimo
  array.splice(array.indexOf(min), 1); // remove o valor mínimo
  var secondmin = Math.min.apply(null, array); // pega o 2o valor mínimo
  array.splice(0,0,min); // devolve o valor mínimo

  return [secondmax,secondmin];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
    let chamada = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
   return chamada
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let anonimo = {
       ...pessoa,
       nome: 'ANÔNIMO',
   }
    return anonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter((item, index, array) => {
        return (item.idade > 14 && item.idade < 60 && item.altura >= 1.5)   
    })
    return pessoasAutorizadas

 
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = pessoas.filter((item, index, array) => {
        return (item.idade <= 14 || item.idade > 60 || item.altura < 1.5)   
    })
    return pessoasNaoAutorizadas
 
 
}

// EXERCÍCIO 14 ****
function retornaContasComSaldoAtualizado(contas) {
    for (let objeto of contas) {
        for (let valor of objeto.compras) {
            objeto.saldoTotal = objeto.saldoTotal - valor
        }
        objeto.compras = []
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const ordenar = consultas.sort((a, b) => {
        return a.nome.localeCompare(b.nome)
    })
    return ordenar
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}