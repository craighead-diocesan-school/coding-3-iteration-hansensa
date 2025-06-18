// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {
  let count = 0
  let squareSeries = prompt('What number do you want the Square Series for?')
  squareSeries = Number(squareSeries)
  let series = ''
  let square = squareSeries
  while (count < squareSeries){
    let number = square * square
    series = series + number + ', '
    count = count + 1
    square = square - 1
  }
  alert('The series is ' + series + '.')
  // write your code here
}
