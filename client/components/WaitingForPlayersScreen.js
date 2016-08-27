import React from 'react'
import { connect } from 'react-redux'

const WaitingForPlayersScreen = ({ players, gameCode }) => (
  <div className="WaitingForPlayersScreen">
    <p>game code: {gameCode}</p>
    <h1>waiting for players...</h1>
    {
      players
        .filter(p => !p.spectator)
        .map(p => <p key={p.id}>{p.name}</p>)
    }
  </div>
)

const mapStateToProps = state => ({
  players: state.players,
  gameCode: state.gameCode,
})

export default connect(mapStateToProps)(WaitingForPlayersScreen)
