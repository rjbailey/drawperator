const http = require('http')
const path = require('path')
const express = require('express')
const WebSocketServer = require('ws').Server
const GameManager = require('./game-manager')

const app = express()
const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, '../public')))

const server = http.createServer(app)
server.listen(port)

console.log('http server listening on %d', port)

const wss = new WebSocketServer({ server })
console.log('websocket server created')

wss.on('connection', ws => {
  console.log('websocket connection open')

  ws.on('message', msg => {
    console.log('received message: %s', msg)
    const data = JSON.parse(msg)
    switch (data.type) {
      case 'CREATE_GAME':
        GameManager.createGame(ws)
        break
      default:
        console.error('Unrecognized message: %s', msg)
    }
  })

  ws.on('close', () => {
    console.log('websocket connection close')
  })
})
