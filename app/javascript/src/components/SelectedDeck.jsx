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
        playerList = <PlayerDeck playerDeck={this.props.playerDeck} />;
      }
    return ([<div className="SelectedDeck row">{playerList}</div>]);
  }
}

class PlayerDeck extends Component {

  render() {
    var playerList = []
    if (this.props.playerDeck.length == 0) {
      playerList = <div className="col-md-12"><h3>Your selected deck will be displayed here.</h3></div>
    } else {
      playerList = this.props.playerDeck.map((card, index)=>{
        let item = (<div className="Item pull-left ml-5">
          <img src={"/assets/cards/" + card.idName + ".png"} width="50" />
        </div>)
        return item;
      })
    }

    return (playerList);
  }
}

export default SelectedDeck;
