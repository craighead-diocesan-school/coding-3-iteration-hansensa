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
  let countUp = prompt('Pick a number to count up by')
  while (count <= 0) {
    alert(count + countUp+ '...')
    count = count + 2
  }
   
  alert('Lift Off!')
}// copy and paste your code here when you get to the Make step
