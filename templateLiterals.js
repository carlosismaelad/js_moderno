/* Permitem a interpolação de strings e a quebra de linha automática */
let str = `Essa linha será
quebrada automaticamente
  e essa quebrará e terá um espaço no começo
Resultado de uma expressão 2+2=${2 + 2}`

console.log(str)

/* Podemos chamar uma variável dentor de uma string
sem precisar concatenar com o sinal de + */
const nome = 'Carlos'
console.log(`Olá, meu nome é ${nome}`)
