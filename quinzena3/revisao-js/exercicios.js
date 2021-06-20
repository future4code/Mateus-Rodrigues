// EXERCÍCIO 01
function inverteArray(array) {
  const invertArray = []
  for (let i=array.length-1; i>=0; i--){
    invertArray.push(array[i])
  }
return invertArray
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const numPares = array.filter((valor) => {
    return valor % 2 === 0
  })
  const numElevados = numPares.map((valor) => {
    if (valor % 2 === 0) {
      return valor * valor
    }
  })

  return numElevados
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const numberPar = array.filter(valor => {
    return valor % 2 === 0
  })
  return numberPar
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let numMaior = []
  for (let numero of array) {
    if (numero > numMaior) {
      numMaior = numero
    }
  }

  return numMaior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  for (let i = 0; i <= array.length; i++) 
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3

  const cond1 = booleano1 && booleano2 && !booleano4
  const cond2 = (booleano1 && booleano2) || !booleano3
  const cond3 = (booleano2 || booleano3) && (booleano4 || booleano1)
  const cond4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const cond5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  const novoArray = [cond1, cond2, cond3, cond4, cond5]
  return novoArray

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const primeiroNumPares = []
  for (let i=0; i<n*2; i++){
    if (i%2===0){
      primeiroNumPares.push(i)
    }
  }
  return primeiroNumPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  if (a===b&&b===c){
    return 'Equilátero'
  } else if (a===b||b===c||c===a){
    return 'Isósceles'
  } else {
    return ('Escaleno')
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  let maior = num1
  let menor = num1
    if (num2 > maior){
      maior = num2
    }
    if (num2 < menor){
      menor = num2
    }
  let Y = maior%menor===0
  let diferencaNum = Number(maior-menor)
  return {'maiorNumero': maior, 'maiorDivisivelPorMenor': Y, 'diferenca':diferencaNum}
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temporario = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temporario;
      }
    }
  }

  return [array[array.length - 2], array[1]]
}

// EXERCÍCIO 11
function ordenaArray(array) {
  let checkTroca = true
  while (checkTroca === true) {
    checkTroca = false
    for (let i = 0; i < array.length; i++) {
    	  if (array[i] > array[i + 1]) {
        let tempVar = array[i]
        array[i] = array[i + 1]
        array[i + 1] = tempVar
        checkTroca = true
      }
    }
  }
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
