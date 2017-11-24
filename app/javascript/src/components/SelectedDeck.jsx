import React, { Component } from 'react';
import Card from './Card';

class SelectedDeck extends Component {

  handleOpen()  {
    console.log("connected:)");
  }

  render() {
      var playerList = []
      if (this.props.playerDeck.length == 0) {
        playerList = <div className="col-md-12"><h3>Your selected deck will be displayed here.</h3></div>
      } else {
        let player1 = this.props.playerDeck.slice(0, 8)
        let player2 = this.props.playerDeck.slice(8, 16)
        playerList = [
          <PlayerDeck playerDeck={player1} />,
          <PlayerDeck playerDeck={player2} />
        ]
      }
    return ([<div className="players-deck-block">{playerList}</div>]);
  }
}

class PlayerDeck extends Component {

  render() {
    var playerList = []
    if (this.props.playerDeck.length == 0) {
      playerList = <div className="col-md-12"><h3>Your selected deck will be displayed here.</h3></div>
    } else {
      playerList = this.props.playerDeck.map((card, index)=>{
        let item = (<li>
            <a href="#"><img src={"/images/cards/" + card.idName + ".png"} width="50" /></a>
          </li>)
        return item;
      })
    }
    playerList = (<div class="players-deck player-1-deck">
      <ul class="decklist">
        {playerList}
      </ul>
    </div>)

    return (playerList);
  }
}

export default SelectedDeck;
