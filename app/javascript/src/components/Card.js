import React, { Component } from 'react';

class Card extends Component {

  banCard(card) {
    this.props.onCardClick({...card})
    card.isBanned = true;
    this.setState({ card })
    var playerID = 1
    App.global_chat.send_message(card.idName, playerID)
  }

  render() {
    var card = this.props.info
    // if (card.isBanned) {
    //   return false;
    // }
    return (
      <div className="Card col-md-2" onClick={this.banCard.bind(this, card)}>
        <div></div>
        <img src={"/assets/cards/" + card.idName + ".png"} width="75" />
      </div>
    );
  }
}

export default Card;