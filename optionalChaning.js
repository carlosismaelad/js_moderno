/* 
OPTIONAL CHANING - Operador de encadeamento opcional

- Permite ler propriedades internas de uma cadeia de objetos
sem que a validação de cada referência da cadeia seja realizada

- Em outras palavras, permite permite acessar propriedades
internas sem lançar erro quando uma propriedade é nullish (null ou undefined)

- Funciona de forma similar ao encadeamento normal 
operador ("."), porém, éscrito com "?."

*/

const user = {
  nome: 'John Doe',
  email: 'doejohn@email.com',
  friends: [
    {
      name: 'Mary',
      adreess: 'Some Street',
      number: 89
    }
  ],
  age: 42,
  phone: {
    countryCode: '+55',
    ddd: '22',
    number: '987654321'
  }
}

// Encadeamento da forma convencional
console.log(user.friends[0].name)

/* 
Se tentarmos acessar:
console.log(user.friends[0].phone.ddd)
até 'phone' o JavaScript não dará erro, dará undefined.
A partir daí, tentando ler uma propriedade de undefined
ele irá gerar um erro (Cannot read properties of undefined) 
porque undefined não tem propriedade.
Poderíamos fazer uma serie de validações com 'ifs' mas ficaria
um código muito pouco estético.
*/
// Podemos fazer da seguinte forma:
console.log(user?.friends[0]?.phone?.ddd)
// O JS tentará ler uma propriedade, se ela não for nula ele passará para a seguinte.
// Assim ele não retorna erro, retorna 'undefined'.

// Vamos passar um array que não existe dentro do nosso objeto:
console.log(user.brothers?.[5].name) // retorna 'undefined'
// Ele tentou ler o brothers e uma propriedade interna dele (posição 5)
