const dayjs = require('dayjs')

function birthday(date) {
  const birthday = dayjs(date)
  const today = dayjs()

  const ageInYears = today.diff(birthday, 'year')
  const nextBirthday = birthday.add(ageInYears + 1, 'year')
  const daysToNextBirthday = nextBirthday.diff(today, 'days') + 1

  console.log(`Idade: ${ageInYears}`)
  console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
  console.log(
    `Faltam ${daysToNextBirthday} dias para você completar ${
      ageInYears + 1
    } anos`
  )
}

birthday('1992-07-17')
