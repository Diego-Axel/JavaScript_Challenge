// Armazenando uma função em uma variável

const imprimir_soma = function (a, b) {
    console.log(a + b)
}

imprimir_soma(2, 3)

// Armazenando um função arrow em uma variável 
const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 3))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 2))

const imprimir2 = a => console.log(a)
imprimir2('Hello, World!')