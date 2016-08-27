let dispatch

export function init(storeDispatch) {
  dispatch = storeDispatch
}

const ws = new WebSocket('wss://drawperator.herokuapp.com')

ws.onopen = () => {}

ws.onmessage = msg => {
  const data = JSON.parse(msg.data)

  console.log(data)

  if (data.type === 'GAME_JOINED')
    localStorage.playerId = data.playerId

  if (data.type)
    dispatch(data)
  else
    console.error(data)
}

function send(data) {
  ws.send(JSON.stringify(data))
}

export function createGame() {
  send({ type: 'CREATE_GAME' })
}

export function joinGame(gameCode, name) {
  const playerId = localStorage.playerId
  send({ type: 'JOIN_GAME', gameCode, name, playerId })
}
