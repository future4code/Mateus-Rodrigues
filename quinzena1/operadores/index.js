// Exercicio 1 

/* console.log ("a. ", false)
console.log ("b. ", false)
console.log ("c. ", true)
console.log ("d. ", Boolean) */

// Exercicio 2

/* let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) */
// Faltou ele dolocar como definicao a variavel NUMBER, descrevendo que estava se tratando de um numero.

// Exercicio 3

/* let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) */

// Exercicio 1 = CODIGOS

 let idade = Number (prompt ("Qual a sua idade ?"))
let idadeAmigo = Number (prompt ("Qual é a idade do seu amigo ?"))
console.log ("Sua idade é maior do que a do seu melhor amigo?", idade >idadeAmigo)

console.log ("A diferença de idade é de:", idade - idadeAmigo, "anos.") 

// Exercicio 2

let num1 = Number (prompt("Digite um numero par:"))
let resto = num1 % 2
console.log (resto) 

// Todo numero par da o resultado " 0 "
// Se o usuario colocar um numero impar o resultado é " 1 "

// Exercicio 3

let idadeUser = Number (prompt("Qual a sua idade ?"))
let idadeMeses = idadeUser * 12
let idadeDias = idadeUser * 365
let idadeHoras = idadeUser * 8760

console.log ("Sua idade em meses:", idadeMeses)
console.log ("Sua idade em dias:", idadeDias)
console.log ("Sua idade em horas:", idadeHoras) 

// Exercicio 4

let numero1 = Number (prompt("Digite um numero"))
let numero2 = Number (prompt("Digite um segundo numero"))

console.log ("O primeiro numero é maior que o segundo ?", numero1 > numero2)
console.log ("O primeiro numero é igual ao segundo ?", numero1 == numero2)
console.log ("O primeiro numero é divisivel pelo segundo ?", (numero1 % numero2) == 0 )
console.log ("O segundo numero é divisivel pelo primeiro ?", (numero2 % numero1) == 0 )