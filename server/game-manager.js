const randomstring = require('randomstring')
const Game = require('./game')
const Player = require('./player')

const games = new Map

function generateGameCode() {
  return randomstring.generate({ length: 4, charset: 'alphabetic' })
    .toLowerCase()
}

const GameManager = {
  createGame(ws) {
    let code
    while (!code || games.has(code))
      code = generateGameCode()
    const game = new Game(code, () => games.delete(code))
    games.set(code, game)
    game.addPlayer(new Player(ws))
  },
}

module.exports = GameManager
