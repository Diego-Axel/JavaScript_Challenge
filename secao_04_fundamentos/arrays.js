const valores = [7.7, 12.3, 143, 8.9]
console.log(valores[0], valores[3])
console.log(valores[4]) // Como eu não tenho nenhum valor neste indice, vai dar 'undefined'

// mas

valores[4] = 10 // Agora eu estou adicionando um elemento ao indice 4
console.log()
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)

// valores[10] = 40
// console.log()
// console.log(valores) // agora aqui ele diz que tem valores vazios antes de cehgar no 10
// console.log(valores.length)