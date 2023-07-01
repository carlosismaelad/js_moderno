/* 
Uma forma diferente de escrever funções anônimas.
Não utiliza a palavra reservada "function"
Usa "=>" após os parâmetros
Por isso "arrow", do ingês 'seta' ou 'flecha'
Não possui seus próprios 'this', 'arguments', 'super' e 'new.target'
Permite retornar diretamente uma expressão caso seja
uma função de uma única linha
*/

const sum = (a, b) => {
  return a + b
}
console.log(sum(5, 5))

const multiply = (c, d) => c * d
console.log(multiply(5, 5))

/* 
Quando se tem apenas um parâmetro não se faz necessário 
o uso dos parênteses
*/
const double = n => `O dobro de ${n} é ${n * 2}`

const number = 21

console.log(double(number))

/* Outro caso de uso onde as arrow functions são bastantes
utilizadas são com as high order functions dos array:
map, filter, reduce etc */
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)
