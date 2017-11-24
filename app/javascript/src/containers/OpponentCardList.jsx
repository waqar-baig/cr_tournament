import React from 'react'
import { connect } from 'react-redux'
import OpponentCard from '../components/OpponentCard'
import { opponentSelectedCard } from '../actions'

const mapStateToProps = state => {
  return {
    opponentCards: state.opponentCards
  }
}

const mapDispatchToProps = dispatch => {
  Socket.cable.subscriptions.create(
    {
      channel: "ChatRoomsChannel",
      chat_room_id: '1'
    }, {
      received (data) {
        if (data.team_id == window.currentTeamId || data.action == 'card_banned') {
          return
        }
        window.canSelectCard = true
        dispatch(opponentSelectedCard({_id: data.card_id, idName: data.card_name}))
      }
    });
  return {
  }
}

const OpponentCardList = connect(mapStateToProps, mapDispatchToProps)(OpponentCard)

export default OpponentCardList