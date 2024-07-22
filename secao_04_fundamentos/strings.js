const escola = 'Cod3r'

console.log(escola.charAt(4)) // Vai me dar a letra que está no indice 4 da string -> Cod3r
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola'.concat(' ').concat(escola).concat('!').concat(' A melhor em programação'.concat('!')))
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))