// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
  let count = 0
  let numOfAttendees = prompt('What is the number of attendees?')
  numOfAttendees = Number(numOfAttendees)
  let attendeeList = ''
  
  while (count < numOfAttendees) {
    let attendee = prompt('Enter a name')
    attendeeList = attendeeList + attendee + ', '
    count = count + 1
  }
  
  alert(attendeeList) 
}

function make2() {
  let numToAdd = prompt('How many numbers do you want to add together?')
  let count = 0
  let sum = 0
  sum = Number(sum)

  while (count < numToAdd){
    let number = prompt('Enter a number')
    number = Number(number)
    sum = sum + number
    count = count + 1
  }
  alert(sum)
  // copy and paste your code here when you get to the Make step
}