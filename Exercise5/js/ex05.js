const num1 = 40
const num2 = 55

// Comparaciones
console.log(`${num1} > ${num2}: ${num1 > num2}`)
console.log(`${num1} < ${num2}: ${num1 < num2}`)
console.log(`${num1} = ${num2}: ${num1 === num2}`)
console.log(`${num1} != ${num2}: ${num1 !== num2}`)

// Uso operadores lógicos
console.log(`${num1} < ${num2} and ${num1} != ${num2}: ${num1 < num2 && num1 !== num2}`)
console.log(`${num1} > ${num2} or ${num2} = 55: ${num1 > num2 || num2 === 55}`)
console.log(`${num1} != ${num2}: ${!(num1 === num2)}`)