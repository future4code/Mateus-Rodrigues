// Exercícios de interpretação de código

// (1) - Ele imprime no Console os nomes e os respectivos apelidos seguidos pelo index (0,1,2)Separadamente.

// (2) - Ele imprime no Console apenas um array, logo em ordem do index (0,1,2)

// (3) - Ele imprime no Console apenas os nomes que nao contem o apelido "Chijo"

////////////////////////////////////////////////////////////////////////////////////////

// Exercícios de escrita de código

// Exercicio 01

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// (A)
const nomes = (pet, indice, array) => {
    return pet.nome
}
const nomePets = pets.map(nomes)
console.log (nomePets)

// (B)
const racaSalsicha = pets.filter((salsicha) => {
    return salsicha.raca === "Salsicha"
})
console.log (racaSalsicha)

// (C)
const racaPoodle = pets.filter((tipo) => {
    return tipo.raca === "Poodle"
})

const descontoTosa = racaPoodle.map((parametro) => {
    return `Voçê ganhou um cupom de desconto de 10 % para tosar o/a ${parametro} `
})

console.log (descontoTosa)

