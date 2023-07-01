/* 
DESESTRUTURAÇÃO DE OBJETOS E ARRAYS

Funcionalidade que permite criar variáveis a partir de propriedades de um objeto ou elemento de um array.

No caso das propriedades do objeto, as variáveis são criadas com o mesmo nome da propriedade

No caso dos elementos do array, podemos atribuir qualquer nome à variável

Também pode ser utilizada de outras formas, como nos parâmetros de uma função.
*/

const person = {
  name: 'Luke',
  job: 'Farmer',
  parents: ['Anakin', 'Padmé']
}

/* A forma tradicional é -> const name = person.name */
const name = person.name
const { job, parents } = person // Usanso a desestruturação!
console.log(name, job)

/* 
Podemos passar mais de uma propriedade e criar várias variáveis ao mesmo tempo */
const pessoa = {
  nome: 'Carlos',
  profissao: 'Developer',
  pais: ['Antonio', 'Salette']
}

const { nome, profissao, pais } = pessoa
console.log(nome, profissao, pais)
// O JS entende que queremos quebrar o objeto e pegar essas duas propriedades

/* COMO FAZEMOS ISSO COM ARRAYS? */

const [father, mother] = parents // Recebe Anakin e Padmé do primeiro objeto
/* 
O JS entende que queremos quebrar o array parents e criar duas variáveis.
Trabalhamos com a carcaterística dos arrays: a ordem dos elementos. 
Ele vai pegar os elementos exatamente na ordem em que colocamos. 
*/
console.log(father)
console.log(mother)
console.log(father, mother)

/* CONSEGUIMOS FAZER ISSO COM FUNÇÕES */
function createUser({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999)
  return {
    id,
    name,
    job,
    parents
  }
}
const luke = person
console.log(luke)
