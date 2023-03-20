import React from 'react'

const GuessInput = ({ handleSubmitGuess }) => {
  const [guess, setGuess] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('guess: ', guess)
    handleSubmitGuess(guess)
    setGuess('')
  }

  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
      />
    </form>
  )
}

export default GuessInput
