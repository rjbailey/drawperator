import React from 'react'
import { createGame, joinGame } from '../ws'

const JoinGameScreen = () => {
  let gameCode
  let name

  return (
    <div className="JoinGameScreen">
      <h1>drawperator</h1>
      <button type="button" onClick={e => {
        e.preventDefault()
        createGame()
      }}>
        new game
      </button>
      <form onSubmit={e => {
        e.preventDefault()
        if (!gameCode.value.trim() || !name.value.trim())
          return
        joinGame(gameCode, name)
      }}>
        <label className="game-code">
          game code
          <input ref={node => { gameCode = node }} maxLength="4" />
        </label>
        <label>
          your name
          <input ref={node => { name = node }} maxLength="32" />
        </label>
        <button type="submit">
          join game
        </button>
      </form>
    </div>
  )
}

export default JoinGameScreen
