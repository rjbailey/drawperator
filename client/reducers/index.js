import { combineReducers } from 'redux'
import currentScreen from './currentScreen'
import players from './players'
import gameCode from './gameCode'

const app = combineReducers({
  currentScreen,
  players,
  gameCode,
})

export default app
