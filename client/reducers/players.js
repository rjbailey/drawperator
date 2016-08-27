const players = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [...state, action.player]
    case 'REMOVE_PLAYER':
      return state.filter(p => p.id !== action.playerId)
    default:
      return state
  }
}

export default players
