import Screen from '../Screen'

const currentScreen = (state = Screen.JoinGame, action) => {
  switch (action.type) {
    case 'GAME_JOINED':
      return Screen.WaitingForPlayers
    default:
      return state
  }
}

export default currentScreen
