import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Cell({ letter, status }) {
  return <span className={`cell ${status ? status : ''}`}>{letter}</span>
}

function Guess({ word, answer }) {
  const result = checkGuess(word, answer)

  return (
    <p className="guess">
      {range(5).map((number) => (
        <Cell
          key={number}
          letter={result ? result[number].letter : undefined}
          status={result ? result[number].status : undefined}
        />
      ))}
    </p>
  )
}

export default Guess
