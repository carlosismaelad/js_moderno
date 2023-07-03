/* Média Aritmética Simples: Pode ser calculada somando todos os valores e dividindo o total da soma pela quantidade de valores. */
const average = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0)
  return sum / numbers.length
}
console.log(`Média aritmética simples: ${average(3, 6, 10, 9)}`) // 28 / 4 = 7

/* Média Aritmética Ponderada: Semelhante à média aritmética simples, porém é possível atribuir um peso a cada valor informado, fazendo com que ele tenha um valor proporcionalmente diferente dos outros. Pode ser calculada somando as multiplicações dos valores pelos seus respectivos pesos e dividindo o total pela soma dos pesos. */
const weightedAverage = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * (weight ?? 1),
    0
  )
  const weightSum = entries.reduce(
    (accum, entry) => accum + (entry.weight ?? 1),
    0
  )
  return sum / weightSum
}
console.log(
  `Média ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 }
  )}`
)

/* Mediana: Pode ser calculada encontrando o valor central de uma sequência de números crescente ou decrescente. Caso existam dois números centrais, a mediana é calculada através da média aritmética simples desses dois números. */
const median = (...numbers) => {
  const orderedValues = [...numbers].sort((a, b) => a - b)
  const middle = Math.floor(orderedValues.length / 2)
  if (orderedValues.length % 2 !== 0) {
    return orderedValues[middle]
  }
  const firsMedian = orderedValues[middle - 1]
  const secondMedian = orderedValues[middle]
  return average(firsMedian, secondMedian)
}

console.log(`Mediana: ${median(1, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

/* Moda: Pode ser calculada encontrando o valor que mais se repete em um dado conjunto. */
const mode = (...numbers) => {
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0]
}
console.log(
  `Moda: ${mode(
    1,
    1,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    5,
    4,
    9,
    7,
    4,
    3,
    5,
    2,
    4,
    0,
    4
  )}`
)
