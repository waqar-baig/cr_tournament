import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleCardClick } from '../actions'

class CardElement extends Component {
  constructor(props, doCardClick) {
    super(props);
    this.doCardClick = this.props.doCardClick;
  }

  handleClick(card) {
    this.props.doCardClick(card)
  }

  render() {
    var card = this.props

    return (
      <div className="Card col-md-2" onClick={this.handleClick.bind(this, card)}>
        <div></div>
        <img src={"/assets/cards/" + card.idName + ".png"} width="75" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
};

const mapDispatchToEvents = (dispatch) => {
  return {
    doCardClick: (card) => {
      dispatch(handleCardClick(card));
    }
  };
};
const Card = connect(
  mapStateToProps,
  mapDispatchToEvents
)(CardElement);

export default Card;