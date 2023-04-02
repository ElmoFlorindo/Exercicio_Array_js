// 1. no array abaixo qual o numero que pega a Ferrari?

let carros = ['BMW' , 'Ferrari' , 'Mercedes']
let x = 1
console.log(`A ${carros[x]} é conhecida pela cor vermelha!`)


// 2. Troque a Ferrari por Audi

carros[1] = "Audi"
console.log(`Esse é o novo array :  ${carros}`)

// 3. Adiciona Volvo na lista

carros.push("Volvo")

console.log(`Novo array : ${carros}`)

// 4. Exiba quantos itens tem no array.

console.log(carros.length)