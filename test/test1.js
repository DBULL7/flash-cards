var assert  = require('chai').assert;
var Card = require('../Card')
var Guess = require('../Guess')

describe('Card', function() {
  it('should be a function', function() {
    assert.isFunction(Card)
  })

  it('should instantiate a new card', function () {
    var card = new Card({})
    assert.isObject(card)
  })

  it('should have a question', function() {
    var card = new Card({question: 'What is my name'})
    assert.equal(card.question, 'What is my name')
  })

  it('should have an answer', function() {
    var card = new Card({question: 'What is my name', answer: 'Devon'})
    assert.equal(card.answer, 'Devon')
  })
})

describe('Guess', function() {
  it('should be a function', function() {
    assert.isFunction(Guess)
  })

  it('should take user input', function() {
    var card = new Card({question: 'What is my name', answer: 'Devon'})
    var guess = new Guess('Dave', card)
    assert.equal(guess.userGuess, 'Dave')
  })

  it('should take an object, card', function () {
    var card = new Card({question: 'What is the best city in TX', answer: 'Dallas'})
    var guess = new Guess('Plano', card)
    assert.equal(guess.card.question, 'What is the best city in TX')
    assert.equal(guess.card.answer, 'Dallas')
  })

  it('if the guess response is equal to the card answer it should be correct', function() {
    var card = new Card({question: 'What is the best city CO', answer: 'Denver'})
    var guess = new Guess('Denver', card)
    assert.equal(guess.response, true)
  })
})
