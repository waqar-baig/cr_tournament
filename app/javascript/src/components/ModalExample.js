import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ModalExample extends Component {
  constructor(props) {
    super();

    this.state = {
      modalIsOpen: true,
      canClose: false,
    };
    this.teams = props.teams;
    this.setCurrentPlayer = this.setCurrentPlayer.bind(this);
  }

  closeModal() {
    if (this.state.canClose) {
      this.setState({ modalIsOpen: false });
    }
  }

  setCurrentPlayer(player) {
    console.log('current player: ' + player.name)
    this.props.currentPlayer(player);
    Stage.setCurrentPlayer(player)
    this.setState({ modalIsOpen: false })
  }

  render() {
    let teams = this.teams.map((team, index)=> {
      return <Team obj={team} onSelect={this.setCurrentPlayer} currentPlayer={this.props.currentPlayer} />
    })
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h3 ref={subtitle => this.subtitle = subtitle}>Who are you?</h3>
          <div className="row">{teams}</div>
        </Modal>
      </div>
    );
  }
}

class Team extends Component {
  constructor(props) {
    super();
    this.team = props.obj
  }

  render() {
    // const players = this.team.players.map((player, index)=> {
      // return [<Player obj={player} handleSelect={this.props.onSelect} currentPlayer={this.props.currentPlayer} />, <br/>]
      const team = <a className="btn btn-primary" onClick={this.props.onSelect.bind(this, team)}><h4>{this.team.name}</h4></a>
    // })
    return <div className="col-md-6">{team}</div>
  }
}

// class Player extends Component {

//   render() {
//     return <a className="btn btn-primary" onClick={this.props.handleSelect.bind(this, this.props.obj)}><h4>{this.props.obj.name}</h4></a>
//   }
// }

export default ModalExample;