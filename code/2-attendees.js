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
  let count = 0
  let numToAdd = prompt('How many numbers do you want to add together?')
  numToAdd = Number(numToAdd)
  let numbers = ''

  while (count < numToAdd){
    let number = prompt('Enter a number')
    numbers = numbers + number + ', '
    count = count + number
  }

  alert('= ' + numbers)
  // copy and paste your code here when you get to the Make step
  
}