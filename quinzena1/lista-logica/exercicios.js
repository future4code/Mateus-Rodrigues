// Exemplos

//Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
} 

// ---------------------------------------------------
// Exercícios

// Exercício 1
 function calculaAreaRetangulo() {

  const  num1  =  Number  ( prompt  ( "Insira um numero" ) )
  const  num2  =  Number  ( prompt  ( "Insira um numero" ) )  

  console.log   (num1  *  num2) 
}

// Exercício 2
function imprimeIdade() {

const anoAtual = Number(prompt("ano atual"))
const anoNascimento = Number(prompt("ano de nascimento"))
const idadeAtual = anoAtual - anoNascimento

console.log (idadeAtual)

 }

// Exercício 3
function calculaIMC() {
 const peso = Number(prompt("peso:"))
 const altura = Number(prompt("altura:"))

 const valorAltura = altura * altura
 const imc = peso / valorAltura

 console.log (imc)


}

// Exercício 4
function imprimeInformacoesUsuario() {
 const nome = prompt("Nome:")
 const idade = Number(prompt ("idade:"))
 const email = prompt("email:") 

 console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".") 

}

// Exercício 5
 function imprimeTresCoresFavoritas() {

const cor1 = prompt ("Digite uma cor:")
const cor2 = prompt ("Digite uma segunda cor:")
const cor3 = prompt ("Digite uma terceira cor:")

console.log ([cor1, cor2, cor3]) 
}
 


// Exercício 6
 function retornaStringEmMaiuscula() {
  const palavra = prompt ("Escreva uma palavra.")

  console.log(palavra.toUpperCase()); 
} 

// Exercício 7
 function calculaIngressosEspetaculo() {
let custo = Number (prompt("Custo do espetaculo:"))
let ingresso = Number (prompt("Valor de cada ingresso:"))
let quantidade = custo / ingresso

console.log (quantidade)
} 

// Exercício 8
function checaStringsMesmoTamanho() {

 const string1 = prompt ("Digite uma Palavra")
const string2 = prompt ("Digite uma segunda Palavra")

console.log (string1.length === string2.length) 

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() { 

 const string1 = prompt ("Digite uma Palavra")
const string2 = prompt ("Digite uma segunda Palavra")
  
console.log (string1.toUpperCase() === string2.toUpperCase()) 

}

// Exercício 10
function checaRenovacaoRG() {

 let  anoAtual  =  Number  ( prompt ( "Qual é o ano atual ?" ) )
let  anoNascimento  =  Number ( prompt ( "Qual o seu ano de nascimento" ) )
let  emissaoRg  = Number ( prompt ( "Em qual ano seu RG foi emitido" ) ) 
const idade = anoAtual - anoNascimento
const anoRg = anoAtual - emissaoRg
  
console.log (idade <=20 && anoRg >=5 || idade >20 && idade <=50 && anoRg >=10 || idade >50 && anoRg >= 15 )  

  
}

// Exercício 11
 function checaAnoBissexto() {
const ano = Number (prompt("Insira um ano"))

const quatrocentos = (ano % 400 == 0)
const quatro = (ano % 4 == 0)
const cem = (ano % 100 !== 0)
  
console.log (quatro && cem || quatrocentos)   
}

// Exercício 12
function checaValidadeInscricaoLabenu() {

let suaIdade = (prompt ("Você tem mais de 18 anos ?") == "sim")
let ensinoMedio = (prompt ("Você possui ensino médio completo?") == "sim")
let disponivel = (prompt ("Você possui disponibilidade exclusiva durante os horários do curso?") == "sim")



console.log (suaIdade == ensinoMedio == disponivel)

}







