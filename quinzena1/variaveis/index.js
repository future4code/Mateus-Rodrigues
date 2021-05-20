/* Exercicio 01

resposta: 10 e 5 

 Exercicio 02

resposta: 10 , 10 , 10

Exercicio 03

resposta: quantidade , valor*/

// Exercicios de Escrita de Codigo
// 01

// let nome 
// let idade

// console.log (typeof nome)
// console.log (typeof idade)

//Se for com variaveis const sempre terao de ser declaradas. 

/*const nome = prompt("Qual o seu nome ?" )
const idade = prompt("Qual a sua idade ?")

console.log (typeof nome)
console.log (typeof idade)

// A caixa do Prompt sempre devolve uma String*/

const nome = "Mateus"
const idade = 28

console.log ("Olá" , nome,",voce tem", idade, "anos.")
console.log (typeof nome)
console.log (typeof idade)

// Exercicio 02

const carros = prompt ("É verdade que voce gosta de carros ?")
const motos = prompt("Voce gosta de motos ?")
const avioes = prompt("Gosta de avioes ?")

console.log (typeof carros)
console.log (typeof motos)
console.log (typeof avioes)

console.log ("É verdade que voce gosta de carros ?" ,carros)
console.log ("Voce gosta de motos ?" ,motos)
console.log ("Gosta de avioes ?" ,avioes)

// Exercicio 03 

let a = 10
let b = 25
let c
c = a
a = b 
a = c

console.log(a, b, c)

console.log("Valor de a:" ,a,"Valor de b:" ,b)
console.log("O novo valor de a é:", b) // O novo valor de a é 25
console.log("O novo valor de b é:", a) // O novo valor de b é 10

// Desafio

let numero1 = Number (prompt ("Insira um numero"))
let numero2 = Number (prompt ("Insira um numero"))

console.log ("O resultado dos numeros somados sao:", numero1 + numero2)




