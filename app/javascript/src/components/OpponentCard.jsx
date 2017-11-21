import React, { Component } from 'react';
import { connect } from 'react-redux'

class OpponentCard extends Component {

  render() {
    var cardList = ''
    console.log('inside OpponentCard.length: '+ this.props.opponentCards.length)
    if (this.props.opponentCards.length == 0) {
      cardList = <div className="col-md-12"><h3>Your opponent's card will appear here!</h3></div>
    } else {
      cardList = this.props.opponentCards.map((card, index)=>{
        let item = (<div className="Item pull-left ml-10">
                      <img src={"/assets/cards/" + card.idName + ".png"} />
                    </div>)
        return item;
      })
    }
    return ([<div className="OpponentCard row">{cardList}</div>]);
  }
}

export default OpponentCard
