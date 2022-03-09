/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de Blackjack!")
   
if (confirm("Quer iniciar uma nova rodada?")) {

   const primeiraCarta = comprarCarta();
   const segundaCarta = comprarCarta();
   const somaDosValores = primeiraCarta.valor + segundaCarta.valor

   const primeiraCartaComp = comprarCarta();
   const segundaCartaComp = comprarCarta();
   const somaDosValoresComp = primeiraCartaComp.valor + segundaCartaComp.valor

   console.log(`Usuário - ${primeiraCarta.texto},${segundaCarta.texto} - pontuação ${somaDosValores}`)
   console.log(`Usuário - ${primeiraCartaComp.texto},${segundaCartaComp.texto} - pontuação ${somaDosValoresComp}`)
   
   if (somaDosValores > somaDosValoresComp) {
      console.log("Você Ganhou!")
   } else if (somaDosValores < somaDosValoresComp) {
      console.log("Você Perdeu!")
   } 
   else if (somaDosValores === somaDosValoresComp) {
      console.log("Empatou")}

} else {
   console.log("O Jogo Acabou")
}