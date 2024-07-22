const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.3123
const avaliacao2 = 6.4124 

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2)
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // para controlar a quantidade de casas decimais 
console.log(typeof media)
console.log()

console.log(media.toString(2)) // em binário ou a base de sua escolha

console.log()
// Number -> function | number -> tipagem do dado
console.log(typeof media)
console.log(typeof Number)