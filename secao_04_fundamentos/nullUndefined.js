let valor // não inicializada
console.log(valor) // não atribui absolutamente nada pra essa variavel, nunca foi inicializada


valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.56
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)
// delete produto.preco
// console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)