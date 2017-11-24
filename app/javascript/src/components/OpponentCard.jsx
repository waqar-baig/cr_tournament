import React, { Component } from 'react';
import { connect } from 'react-redux'

class OpponentCard extends Component {

  render() {
    var cardList = ''
    console.log('inside OpponentCard.length: '+ this.props.opponentCards.length)
    if (this.props.opponentCards.length == 0) {
      cardList = <div className="col-md-12"><h3>Your opponent's card will appear here!</h3></div>
    } else {

      let opponent1 = this.props.opponentCards.slice(0, 8).map((card, index) => {
        return (<li><img src={"/images/cards/" + card.idName + ".png"} alt={card.idName} /></li>)
      });
      let opponent2 = this.props.opponentCards.slice(8, 16).map((card, index) => {
        return (<li><img src={"/images/cards/" + card.idName + ".png"} alt={card.idName} /></li>)
      })
      cardList = [opponent1, opponent2].map((deck, index)=>{
        return (<div className={"opponent-" + (index + 1)}>
          <ul class="decklist">
            {deck}
          </ul>
        </div>)
      })
    }
    return ([<div className="OpponentCard row">{cardList}</div>]);
  }
}

export default OpponentCard
