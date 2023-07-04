export default function calculate() {
  const resultInput = document.getElementById('result')
  resultInput.value = 'Error'
  resultInput.classList.add('error')
  const resultado = eval(input.value)
  // Recomenda-se não usar "eval()" em aplicações importantes por tornar a aplicação vulnerável a códigos maliciosos.

  resultInput.value = resultado
  resultInput.classList.remove('error')
}
