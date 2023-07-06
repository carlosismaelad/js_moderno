const str = `{
  "name": "Carlos",
  "yearOfExperience": 2,
  "technologies": ["JavaScript", "Typescript", "NodeJs", "Python", "Django"],
  "work": true,
  "website": null
}`

const obj = JSON.parse(str)
console.log(obj)

const str2 = JSON.stringify(obj)
console.log(str2)
