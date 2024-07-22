const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}
`
console.log(concatenacao, template)

// expressões...

console.log(`Olá, ${nome}, tudo bem com você? Espero que sim. Por favor ${nome}, sente-se.`)
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
