// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {

  let count = prompt('Pick a number to count down from.')

  while (count > 0) {
    alert(count + '...')
    count = count - 1
  }

  alert('Lift Off!')
}

function make1() {
  let count = prompt('Pick a number to count to.')
  count = Number(count)

  let countUp = prompt('Pick a number to count up by.')
  countUp = Number(countUp)
  
  number = 0
  while (number < count) {
    alert(number + '...')
    number = number + countUp
  }
}
alert('Lift Off!')
// copy and paste your code here when you get to the Make step
