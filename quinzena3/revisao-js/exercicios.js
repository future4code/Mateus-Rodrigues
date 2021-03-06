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
  const favoritoAstrodev = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: [`Meryl Streep`, `Anne Hathaway`, `Emily Blunt`, `Stanley Tucci`]
  }
  return favoritoAstrodev
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const chamadaFavorito = filmeFavorito()
  return (`Venha assistir ao filme ${chamadaFavorito.nome}, de ${chamadaFavorito.ano}, dirigido por ${chamadaFavorito.diretor} e estrelado por ${chamadaFavorito.atores.join(', ')}.`)
}


// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: (2*Number(lado1+lado2)),
    area: Number(lado1*lado2)
  }
  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const infoPessoal= {...pessoa,
    nome: 'ANÔNIMO'}
  return infoPessoal
}

// EXERCÍCIO 16A
function maioresDe18(arrayPessoas)  {
  const resultado = arrayPessoas.filter((param)=>{
    return param.idade>=18
  })
  return resultado
}

// EXERCÍCIO 16B
function menoresDe18(arrayPessoas) {
  const result = arrayPessoas.filter((parametro)=>{
    return parametro.idade<18
  })
  return result
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const resultado = array.map((param)=>{
    return param*2
  })
  return resultado
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const result1 = multiplicaArrayPor2(array)
  const result2 = result1.map((input) => {
    return input.toString()
  })
  return result2
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const result = array.map((input)=>{
    if (input%2===0){
      return `${input} é par`
    } else {
      return `${input} é ímpar`
    }
  })
  return result
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const filterPessoas1 = pessoas.filter((input)=>{
    if ((input.altura>=1.5)&&(input.idade>14)&&(input.idade<60)){
      return input
    }
  })
  return filterPessoas1
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const filterPessoas = pessoas.filter((input) => {
    if (!((input.altura >= 1.5) && (input.idade > 14) && (input.idade < 60))) {
      return input
    }
  })
  return filterPessoas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  let checkTrue = false;
  while (!checkTrue) {
    checkTrue = true;
    for (let i = 0; i < consultasNome.length - 1; i++) {
      let nomeSeguinte = consultasNome[i + 1].nome
      let compararInicial = (consultasNome[i].nome).localeCompare(nomeSeguinte)
      if (compararInicial === 1) {
        checkTrue = false;
        let tmp = consultasNome[i + 1];
        consultasNome[i + 1] = consultasNome[i];
        consultasNome[i] = tmp;
      }
    }
  }
  return consultasNome;
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  function transformaData(dataParametro) {
    const quebraPalavra = dataParametro.split(`/`)
    let dia = quebraPalavra[0]
    let mes = quebraPalavra[1]
    let ano = quebraPalavra[2]
    let resultado = [ano, mes, dia]
    return resultado
  }


  console.log(`PRIMEIRO PROGRAMA`)

  let checkTrue = false;
  while (!checkTrue) {
    checkTrue = true;
    for (let i = 0; i < consultasData.length - 1; i++) {
      let dateAntes = new Date(transformaData(consultasData[i].dataDaConsulta))
      let dateSeguinte = new Date(transformaData(consultasData[i + 1].dataDaConsulta))
      if (dateSeguinte < dateAntes) {
        checkTrue = false;
        let tmp = consultasData[i + 1];
        consultasData[i + 1] = consultasData[i];
        consultasData[i] = tmp;
      }
    }
  }
  return consultasData;
}

// EXERCÍCIO 20
function calculaSaldo(contas) {

  const atualizarSaldo = contas.map(valor => {
    return {
      cliente: valor.cliente,
      saldoTotal: valor.saldoTotal - valor.compras.reduce((acumulador, atual ) => acumulador += atual, 0),
      compras: valor.compras
    }
  })

  return atualizarSaldo
}