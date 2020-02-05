/*
// requirements://
// get the sum of all numbers
// multiply all numbers (exclude zeros)
// concantenate all the text with a
// space between each words Output: {   sum: 147.2,
    product: -17546428.416,   text: 'we like you'} 
*/

var data = [
  8,
  19.2,
  'we',
  NaN,
  undefined,
  83,
  [],
  'like',
  '',
  18.4,
  0,
  -3.4,
  'you',
  null,
  22
]

var sum = 0
var string = ''
var multiple = 1

function isNumber (value) {
  if (typeof value === 'number' && !isNaN(value)) {
    return true
  }
  return false
}

data.forEach(value => {
  if (isNumber(value)) {
    sum += value
  }
  if (typeof value === 'string') {
    string = `${string} ${value.trim()}`
  }
  if (isNumber(value) && value > 0) {
    multiple *= value
  }
})

console.log(`Output: { sum : ${sum}, product: ${multiple}, text: ${string}}`)