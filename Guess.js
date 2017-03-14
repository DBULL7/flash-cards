// var Card = require('/Card.js');


function Guess(userGuess, card) {
  this.userGuess = userGuess
  this.card = card
  this.response = false

  if (this.userGuess == card.answer) {
    this.response = true
  }
}


module.exports = Guess;
