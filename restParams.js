/* 
PARÂMETROS REST

São uma técnica que permite a uma função receber
qualquer número de parâmetros.

Também permite manipular esses parâmetros com um 
array na definição da função (o que o diferencia do
objeto arguments)

Ex:

function sum (...numbers){
  return numbers.reduce((accum, num)=> accum + num, 0)
}

*/

function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1992, 31))
console.log(sum(2, 2, 2, 2, 2, 2, 2))
console.log(sum(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1))
