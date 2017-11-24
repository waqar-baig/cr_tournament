import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import BannedList from './components/BannedList';
import SelectedDeck from './components/SelectedDeck';
import Home from './components/Home';
import ModalExample from './components/ModalExample';

class stage {
  constructor() { this.currentStage = 'hold' }
  setCurrentPlayer(player) {
    this.currentPlayer = player
    this.goToBanning();
  }

  setCurrentTeam(team) {
    this.currentTeam = team;
  }

  getStage() { return this.currentStage; }

  isBanning() { return this.currentStage == 'banning' }
  goToBanning() { this.currentStage = 'banning' }

  isSelection() { return this.currentStage == 'selection' }
  goToSelection() { this.currentStage = 'selection' }

  isHold() { return this.currentStage == 'hold'}
  setHold() { this.currentStage = 'hold'}
}

window.Stage = new stage()
class App extends Component {
  constructor(props) {
    super();
    this.match = props.match
    Stage.setCurrentTeam(props.team)
    if (props.willStart) {
      Stage.goToBanning();
    }
    this.state = {
      cards: [],
      bannedList: []
    };
    this.components = {
      bannedList: '',
      cards: ''
    }
    this.banCard = this.banCard.bind(this)
    this.currentPlayer = {};
    this.setCurrentPlayer = this.setCurrentPlayer.bind(this)
    this.cardBanned = false;
    this.playerDeck = []
  }

  componentWillMount() {

  }
  componentDidMount() {
    axios.get('/cards.json')
      .then(res => {
        const cards = res.data
        this.setState({ cards: cards, bannedList: this.state.bannedList });
      });
    var that = this
    Socket.cable.subscriptions.create(
      {
        channel: "ChatRoomsChannel",
        chat_room_id: '1'
      }, {
        received (data) {
          if (that.state.bannedList.length == 2) { Stage.goToSelection() }
          if (data.playerID == that.currentPlayer.id) {
            return
          }
          // findCard(data['message'])
          that.state.cards.forEach((_card)=> {
            if (_card.idName == data.message){
              _card.isBanned = true;
              that.state.bannedList.push(_card);
              if (that.state.bannedList.length == 2) { Stage.goToSelection() }
              that.setState({_card})
              return
            }
          })

          // this.state.cards.push()
        }
      });
  }

  setCurrentPlayer(player) {
    this.currentPlayer = player
    window.currentPlayer = player
    this.setState({ player })
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
                    return <Card info={card} index={index} onCardClick={this.banCard} key={index}></Card>;
                  })
    this.components.bannedList = <BannedList list={bannedList} player={this.currentPlayer}></BannedList>;
    this.components.cards = <div className='col-md-6 selection-deck'><div className="row">{ cardList }</div></div>;
    this.components.selectedDeck = <div className="col-md-6 selected-deck"><SelectedDeck playerDeck={this.playerDeck} opponentDeck={this.opponentDeck}/></div>;
    var playerBoard = <div className="row">
                        {this.components.cards}
                        {this.components.selectedDeck}
                      </div>;
    return ([this.components.bannedList, playerBoard])
  }
}

export default App;
