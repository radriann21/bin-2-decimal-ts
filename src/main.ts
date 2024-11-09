// helper
const $ = (el:string):HTMLElement | null => document.querySelector(el)

const binaryInput:HTMLElement | null = $('#binary')
const transformButton:HTMLElement | null = $('#transform')
const resultText:HTMLElement | null = $('#result')

let binaryValue:string 

binaryInput?.addEventListener('change', (evt:Event) => {
  const target = evt.target as HTMLInputElement
  binaryValue = target.value
})

transformButton?.addEventListener('click', () => {

  let result:number = 0
  let binaryLoop:string = binaryValue.split('').reverse().join('')

  for (let i = 0; i < binaryLoop.length; i++) {
    let bit = parseInt(binaryLoop[i], 10)
    let bitValue = bit * Math.pow(2, i)
    result += bitValue
  }

  if (resultText !== null) {
    resultText.innerText = result.toString()
  }
})