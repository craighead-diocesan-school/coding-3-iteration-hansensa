// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {
  let count = 0
  let squareSeries = prompt('What number do you want the Square Series for?')
  squareSeries = Number(squareSeries)
  let series = ''
  while (count < squareSeries){
    number = squareSeries * squareSeries
    series = series + number + ', '
    count = count + 1
    squareSeries = squareSeries - 1
  }
  alert('The series is ' + series + '.')
  // write your code here
}
