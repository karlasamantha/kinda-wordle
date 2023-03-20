import React from 'react'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'

const PreviousGuesses = ({ guesses }) => {
  return (
    <div className="guess-results">
      {guesses.map((value, index) => (
        <p className="guess" key={index}>
          {value}
        </p>
      ))}
    </div>
  )
}

export default PreviousGuesses
