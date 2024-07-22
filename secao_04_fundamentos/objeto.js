const prod1 = {} // Objeto
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4000.00
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaços

console.log(prod1)

const prod2 = {  // Ter em mente que objeto é um conjunto, é uma coleção de pares -> chaves e valor
    nome: 'Camisa Polo', // Chave é o identificador e o valor é o valor dado para aquele identificador
    preco: 79.90,            // Pode ser string, number, função...
}

console.log(prod2)