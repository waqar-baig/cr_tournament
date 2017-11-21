import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { cardsIsLoading, cardsFetchData } from '../actions';
import Card from './Card'

class CardList extends Component {
  componentDidMount() {
    console.log('inside componentDidMount')
    this.props.fetchData('/cards.json');
  }

  render() {
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    return(
      <div className="CardList col-md-8">
        <div className="row">
          {this.props.cards.map(card => (
            <Card key={card._id} {...card} />
          ))}
        </div>
      </div>
    );
  }
}
export default CardList;