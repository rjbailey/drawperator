const gameCode = (state = null, action) => {
  switch (action.type) {
    case 'GAME_JOINED':
      return action.gameCode
    case 'GAME_LEFT':
      return null
    default:
      return state
  }
}

export default gameCode
