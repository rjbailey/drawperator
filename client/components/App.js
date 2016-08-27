import React from 'react'
import { connect } from 'react-redux'
import Screen from '../Screen'
import JoinGameScreen from './JoinGameScreen'
import WaitingForPlayersScreen from './WaitingForPlayersScreen'
import ChooseInitialWordScreen from './ChooseInitialWordScreen'
import DrawScreen from './DrawScreen'
import GuessScreen from './GuessScreen'
import StoryPresentationScreen from './StoryPresentationScreen'

const getVisibleScreen = screen => {
  switch (screen) {
    default:
    case Screen.JoinGame:
      return <JoinGameScreen />
    case Screen.WaitingForPlayers:
      return <WaitingForPlayersScreen />
    case Screen.ChooseInitialWord:
      return <ChooseInitialWordScreen />
    case Screen.Draw:
      return <DrawScreen />
    case Screen.Guess:
      return <GuessScreen />
    case Screen.StoryPresentation:
      return <StoryPresentationScreen />
  }
}

const App = ({ screen }) => (
  <div className="App">
    {getVisibleScreen(screen)}
  </div>
)

const mapStateToProps = state => ({ screen: state.currentScreen })

export default connect(mapStateToProps)(App)
