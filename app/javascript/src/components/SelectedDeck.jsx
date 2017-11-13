import React, { Component } from 'react';
import Card from './Card';

class SelectedDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerDeck: props.playerDeck,
      opponentDeck: props.opponentDeck
    }
  }

  handleOpen()  {
    console.log("connected:)");
  }

  render() {
      var playerList = []
      if (this.state.playerDeck.length == 0) {
        playerList = <div className="col-md-12"><h3>Your selected deck will be displayed here.</h3></div>
      } else {
        playerList = <PlayerDeck playerDeck = {this.state.playerDeck} />;
      }
    return ([<div className="SelectedDeck row">{playerList}</div>]);
  }
}

class PlayerDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerDeck: props.playerDeck
    }
  }

  render() {
      var playerList = []
      if (this.state.playerDeck.length == 0) {
        playerList = <div className="col-md-12"><h3>Your selected deck will be displayed here.</h3></div>
      } else {
        playerList = this.state.playerDeck.map((card, index)=>{
                    return <Card info = {card} index = {index} key = {index}
                      onCardClick = {this.handleOpen} />;
                  })
      }

    return (playerList);
  }
}

export default SelectedDeck;
