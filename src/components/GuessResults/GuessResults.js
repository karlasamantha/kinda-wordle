import React from 'react'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'
import Guess from '../Guess/Guess'

const PreviousGuesses = ({ guesses, answer }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((number) => (
        <Guess key={number} word={guesses[number]} answer={answer} />
      ))}
    </div>
  )
}

export default PreviousGuesses
