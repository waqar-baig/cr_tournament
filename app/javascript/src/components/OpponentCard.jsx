import React, { Component } from 'react';
import { connect } from 'react-redux'

class OpponentCard extends Component {

  render() {
    var cardList = ''
    if (this.props.opponentCards.length == 0) {
      cardList = <div className="col-md-12"><h3>Your opponent's card will appear here!</h3></div>
    } else {

      let opponent1 = this.props.opponentCards.slice(0, 8).map((card, index) => {
        return (<li><img src={"/images/cards/" + card.idName + ".png"} alt={card.idName} /></li>)
      });
      let opponent2 = this.props.opponentCards.slice(8, 16).map((card, index) => {
        return (<li><img src={"/images/cards/" + card.idName + ".png"} alt={card.idName} /></li>)
      })
      cardList = [
        <div className={"opponent-1"}>
          <span class="player-label">Player 1</span>
          <ul className="decklist clearfix">
            {opponent1}
          </ul>
        </div>,
        <h2>opponent</h2>,
        <div className={"opponent-2"}>
          <ul className="decklist clearfix">
            {opponent2}
          </ul>
          <span class="player-label">Player 2</span>
        </div>
      ]
    }
    return (
      <div className="opponent-card-section">
        <img src="/images/opponent-blue.png" className="opponent-blue" />
        {cardList}
        <img src="/images/opponent-red.png" className="opponent-red" />
      </div>
      );
  }
}

export default OpponentCard
