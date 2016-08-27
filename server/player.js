const _ = require('lodash')
const uuid = require('node-uuid')

class Player {
  constructor(ws, name) {
    this.ws = ws
    this.name = name
    this.spectator = name != null
    this.id = uuid.v4()
  }

  toJSON() {
    return _.pick(this, 'id', 'name', 'spectator')
  }

  send(msg) {
    this.ws.send(JSON.stringify(msg))
  }
}

module.exports = Player
