/* 
NULLISH COALESCING - operador de coalescência nula

- Operador lógico que retorna o seu operando do lado direito
quando o seu operador do lado esquerdo é null ou undefined.
Caso contrário, ele retorna o seu operando do lado esquerdo.

- Utiliza dois ponto de interrogação (??)

- Vale destacar que ele é diferente do operador lógico OU (||),
que dá curto-circuito em expressões falsy (por exemplo, o número 0).

- Pode ser usado para expressões lógicas e também para atribuições de valores
padrão através de 'short-circuit evaluation' (avaliação de curto-circuito)
*/

// Ex:
let a = 0
let c = a || 42
console.log(c) // usando OU c receberá 42

c = a ?? 42
console.log(c) // c receberá 0, pois 0 é falsy mas não nullish

c = null ?? 42
console.log(c) // c receberá 42
