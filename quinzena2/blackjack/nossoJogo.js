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

    console.log ("Bem vindo(a) ao jogo de Blackjack !")

    let jogar = confirm("Quer iniciar uma nova rodada?")  

    if (jogar) {
       console.log ("Bom jogo !")
      
   } else {
      console.log("Saindo da partida.")
   }
if (jogar) {
   let cartaUser1 = comprarCarta ()
   let cartaUser2 = comprarCarta ()
   let cartaPc1 = comprarCarta ()
   let cartaPc2 = comprarCarta ()
   
   let pontosUser = cartaUser1.valor + cartaUser2.valor 
   let pontosPc = cartaPc1.valor + cartaPc2.valor

   console.log (`User - cartas: ${cartaUser1.texto} ${cartaUser2.texto} - ${pontosUser}`)
   console.log (`Pc - cartas: ${cartaPc1.texto} ${cartaPc2.texto} - ${pontosPc}`)

   if (pontosUser > pontosPc) {
      console.log ("O usuário ganhou !") 
   } else if (pontosPc > pontosUser) {
      console.log ("O Computador ganhou !")
   } else if (pontosUser === pontosPc){
      console.log ("Deu empate !") 
   }
 
} 
