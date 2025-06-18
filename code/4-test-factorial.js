// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  let count = 0
  let factor = prompt('What number do you want that Factorial for?')
  factor = Number(factor)
  series = ''
  while(count<factor){
    let number = factor * factor
    number = Number(number)
    series = series + number
    count = count + 1
    factor = factor
  }
  alert('The factorial is ' + series)
  // write your code here
}
