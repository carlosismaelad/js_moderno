/* 
Mais um dos rescursos incríveis do JavaScript moderno.

Operador que permite espalhar (do ingês, 'spread') os elementos
de um objeto interável, com um array ou uma string.

Utiliza três pontos: ...iterableObject

Pode ser usado para diferentes fins como por exemplo:
-Passar vários parâmetros de uma única vez
- Clonar objetos iteráveis
- Fazer manipulações sem afetar o objeto original
- Transformar strings em arrays 
*/

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
console.log(...towns)
console.log(...towns[0]) // aplica apenas na primeira string do array

const townsCopy = towns
townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')
console.log({ towns, townsCopy })
// Os dois arrays retornados são exatamente iguais, a alterações feita em townsCopy afetou towns

/* Criando uma cópia com spread sem afetar o original */
const townsClone = [...towns]
townsClone.push('Aldebaran')
console.log({ towns, townsCopy, townsClone })

/* Usando em objetos */
const townsObject = { ...towns }
const townsObjClone = { ...townsObject }

townsObjClone.test = 'Fortaleza'

console.log(townsObject) // retorna como um objeto e as chaves são índices automáticos
console.log(townsObjClone)
