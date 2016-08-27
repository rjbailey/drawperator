const keyMirror = require('keymirror')

const GameState = keyMirror({
  WaitingForPlayers: null,
  ChooseInitialWord: null,
  Draw: null,
  Guess: null,
  StoryPresentation: null,
})

// Wait five minutes after all players have disconnected to destroy the game.
const INACTIVITY_TIMEOUT = 5 * 60 * 60

class Game {
  constructor(code, destroyCallback) {
    this.code = code
    this.destroyCallback = destroyCallback
    this.playersById = new Map
    this.state = GameState.WaitingForPlayers
  }

  resetInactivityTimeout() {
    clearTimeout(this.inactivityTimeout)
    this.inactivityTimeout = setTimeout(this.destroy, INACTIVITY_TIMEOUT)
  }

  transitionState(state) {
    switch (state) {
      case GameState.WaitingForPlayers:
      default:
    }
    this.state = state
  }

  broadcast(msg) {
    for (const player of this.playersById.values())
      player.send(msg)
  }

  addPlayer(player) {
    this.playersById.set(player.id, player)
    clearTimeout(this.inactivityTimeout)

    player.send({
      type: 'GAME_JOINED',
      gameCode: this.code,
      playerId: player.id,
    })
    this.broadcast({ type: 'ADD_PLAYER', player })
  }

  removePlayer(id) {
    if (!this.playersById.has(id))
      return
    const player = this.playersById.get(id)
    player.send({ type: 'GAME_LEFT' })
    this.playersById.delete(id)
    if (!this.playersById.size)
      this.resetInactivityTimeout()
  }

  destroy() {
    this.broadcast({ type: 'GAME_OVER' })
    this.destroyCallback()
  }
}

module.exports = Game
