import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from './Card';
import { opponentBannedCard } from '../actions'

class BannedList extends Component {

  render() {
      var cardList = ''
      if (this.props.cardsBanned.length == 0) {
        cardList = <div className=""><h3>You have one chance to ban a card from this round. Choose wisely</h3></div>
      } else {
        cardList = this.props.cardsBanned.map((card, index)=>{
          let item = (<li className="">
                        <img src={"/images/cards/" + card.idName + ".png"} />
                      </li>)
          return item;
        })
        cardList = <ul class="cards">{cardList}</ul>
      }
    return ([<div className="banned-cards">{cardList}</div>]);
  }
}
const mapStateToProps = state => {
  return {
    cardsBanned: state.cardsBanned
  }
}
const mapDispatchToProps = dispatch => {
  Socket.cable.subscriptions.create(
    {
      channel: "ChatRoomsChannel",
      chat_room_id: '1'
    }, {
      received (data) {
        if (data.team_id == window.currentTeamId || data.action != 'card_banned') {
          return
        }
        if (!window.isFirstTeam) {
          window.canBanCard = true;
        }
        dispatch(opponentBannedCard({_id: data.card_id, idName: data.card_name}))
      }
    });
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BannedList)
