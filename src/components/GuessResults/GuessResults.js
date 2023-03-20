import React from 'react'
import Guess from '../Guess/Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'

const PreviousGuesses = ({ guesses }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((number) => {
        console.log('GUESSES[number] -> ', guesses[number])
        console.log('GUESSES -> ', guesses)
        console.log('GUESSES[number] -> ', number)
        return <Guess key={number} value={guesses[number]} />
      })}
    </div>
  )
}

export default PreviousGuesses
