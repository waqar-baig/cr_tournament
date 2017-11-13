import React, { Component } from 'react';
import Card from './Card';

class BannedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.list
    }
  }

  banCard(data) {
    // console.log(data)
  }
  handleOpen()  {
    console.log("connected:)");
  }

  render() {
      var cardList = ''
      console.log('inside BannedList.length: '+ this.state.cards.length)
      if (this.state.cards.length == 0) {
        cardList = <div className="col-md-12"><h3>You have one chance to ban a card from this round. Choose wisely</h3></div>
      } else {
        cardList = this.state.cards.map((card, index)=>{
                    return <Card info = {card} index = {index} key = {index}
                      onCardClick = {this.banCard} />;
                  })
      }
    return ([<div className="BannedList row">{cardList}</div>]);
  }
}

export default BannedList;