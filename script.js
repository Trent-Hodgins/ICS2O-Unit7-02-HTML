// This line connects the "Guess" button to 'random" finction.//
document.getElementById('button').addEventListener('click', comparison)
let userInput = 0

function comparison () {
  // This line gets the user's input and converts it to an integer.//
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  // This line checks if userInput is less than 0.//
  if (userInput < 0) {
    document.getElementById('answer').innerHTML = 'Negative'
  } else {
    document.getElementById('answer').innerHTML = 'Positive'
  }
}
