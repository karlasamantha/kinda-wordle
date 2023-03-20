import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults/GuessResults'
import WonBanner from '../WonBanner/WonBanner'
import LostBanner from '../LostBanner/LostBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  // active OR won OR lost
  const [gameStatus, setGameStatus] = React.useState('active')
  const [guesses, setGuesses] = React.useState([])

  const handleSubmitGuess = (guess) => {
    const newGuesses = [...guesses, guess]
    setGuesses(newGuesses)

    if (guess === answer) {
      setGameStatus('won')
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  )
}

export default Game
