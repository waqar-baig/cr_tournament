import React, { Component } from 'react';

class Card extends Component {


  banCard(card) {
    if (Stage.isHold()){
      return;
    } else if (Stage.isBanning()) {
      card.isBanned = true;
      this.props.onCardClick({...card})
      Socket.default.card_banned(card.idName, Stage.currentTeam.id)
      Stage.setHold()
    } else if(Stage.isSelection()) {
      card.isSelected = true;
      Socket.default.card_selected(card.idName, Stage.currentTeam.id)
    }
    this.setState({ card })
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