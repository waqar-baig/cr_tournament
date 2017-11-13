import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import BannedList from './components/BannedList';
import SelectedDeck from './components/SelectedDeck';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super();
    this.match = props
    this.state = {
      cards: [],
      bannedList: []
    };
    this.components = {
      bannedList: '',
      cards: ''
    }
    this.banCard = this.banCard.bind(this)
    this.cardBanned = false;
    this.playerDeck = []
  }

  componentWillMount() {

  }
  componentDidMount() {
    axios.get('/cards.json')
      .then(res => {
        const cards = res.data
        console.log(cards)
        this.setState({ cards: cards, bannedList: this.state.bannedList });
      });
    var that = this
    window.App.cable.subscriptions.create(
      {
        channel: "ChatRoomsChannel",
        chat_room_id: '1'
      }, {
        received (data) {
          console.log(data)
          // findCard(data['message'])
          that.state.cards.forEach((_card)=> {
            if (_card.idName == data.message){
              _card.isBanned = true;
              that.state.bannedList.push(_card);
              that.setState({_card})
              return
            }
          })

          // this.state.cards.push()
        }
      });
  }

  banCard(card) {
    if (this.isBanned) {
      this.playerDeck.push({...card})
      // return alert('already banned')
    } else {
      this.isBanned = true;
      card.isBanned = true;
      this.state.bannedList.push(card);
    }
      this.setState({card})
  }

  render(){
    var bannedList = this.state.bannedList;
    var cardList = this.state.cards.map((card, index)=>{
                    if (card.isBanned) {return}
                    return <Card info = {card} index = {index} onCardClick = {this.banCard} key = {index}></Card>;
                  })
    this.components.bannedList = <BannedList list = { bannedList }></BannedList>;
    this.components.cards = <div className='col-md-6 selection-deck'><div className="row">{ cardList }</div></div>;
    this.components.selectedDeck = <div className="col-md-6 selected-deck"><SelectedDeck playerDeck={this.playerDeck} opponentDeck={this.opponentDeck}/></div>;
    var playerBoard = <div className="row">
                        {this.components.cards}
                        {this.components.selectedDeck}
                      </div>;
    return ([this.components.bannedList, playerBoard, <Home />])
  }
}

export default App;
