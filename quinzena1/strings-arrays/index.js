/* // EXERCICIO 01


let array
console.log('a. ', array)

// Resposta: A variavel nao foi especificada entao sera "undefined"

array = null
console.log('b. ', array)

// Resposta: Nesse caso a variavel foi definida como null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

// Resposta: 11 

let i = 0
console.log('d. ', array[i])

// Resposta: array[0]

array[i+1] = 19
console.log('e. ', array)

// Resposta: [0+3] = 19

const valor = array[i+6]
console.log('f. ', valor)

// Resposta: [0+9] = 9 


// EXERCICIO 02


const frase = prompt("Subi num ônibus em Marrocos")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Resposta : " SUBA NUM ÔNIBUS EM MIRROCOS" */

//-----------------------------------------------------------------------------------------

// EXERCICIO 01

/* const nomeDoUsuario = prompt("Qual o seu nome e Sobrenome ?")
const email = prompt ("Coloque seu email")

console.log ("O e-mail", email.trim(), "foi cadastrado com sucesso. Seja bem-vinda(o)", nomeDoUsuario) */

// EXERCICIO 02

/* let minhasComidas = ["Pizza", "Lasanha", "Macarrao", "Peixe", "Sorvete"]

/* A */
//console.log (minhasComidas)

/* B */
/*console.log ("Essas são as minhas comidas preferidas:")
console.log ("1;", minhasComidas [0])
console.log ("2;", minhasComidas [1])
console.log ("3;", minhasComidas [2])
console.log ("4;", minhasComidas [3])
console.log ("5;", minhasComidas [4]) */

/* C */

/* let comidas = ["Pizza", "Lasanha", "Macarrao", "Peixe", "Sorvete"]


const comidaUsuario = prompt ("Qual a sua comida favorita ?")


console.log ("1;", comidas [0])
console.log ("2;", comidaUsuario)
console.log ("3;", comidas [2])
console.log ("4;", comidas [3])
console.log ("5;", comidas [4]) */

// EXERCICIO 03

/* const listaDeTarefaS = []

const tarefa = prompt ("Coloque uma Primeira tarefa do seu dia")
const tarefa1 = prompt ("Coloque uma Segunda tarefa do seu dia")
const tarefa2 = prompt ("Coloque uma Terceira tarefa do seu dia")

listaDeTarefaS.push(tarefa, tarefa1, tarefa2)
console.log (listaDeTarefaS)

let indice = Number (prompt("Digite um indice da tarefa que ja realizou entre 0 , 1 e 2"))

listaDeTarefaS.splice(indice, 1)
console.log (listaDeTarefaS) */

// DESAFIO

// EXERCICIO 1
/* let frase = prompt ("Digite sua frase")
console.log (frase.split(" ")) */


// EXERCICIO 2

/* const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log (`O indice do abacaxi é : ${frutas.indexOf("Abacaxi")} e a quantidade do Array é: ${frutas.length}`) */
/* const fruta1 = "Abacaxi"

let indiceAbacaxi = 0

for (let contador = 0; contador <= frutas.length; contador++){

    if (fruta1 === frutas [contador]) {

        indiceAbacaxi = contador
        break;
    }    

}
console.log ("O indice do abacaxi é igual : " + indiceAbacaxi + "e o tamanho do Array: " + frutas.length)
 */
