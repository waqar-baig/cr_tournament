import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cardsIsLoading, cardsFetchData } from '../actions';
import Card from './Card';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.selectedRarity = this.props.selectedRarity,
    this.rarities = [
        {
          name: 'Select Rarity',
          value: 'All',
        },
        {
          name:  'Common',
          value: 'Common',
        },
        {
          name:  'Rare',
          value: 'Rare',
        },
        {
          name:  'Epic',
          value: 'Epic',
        },
        {
          name: 'Legendary',
          value: 'Legendary',
        },
      ],
    this.types = [
        {
          name: 'Select Type',
          value: 'All',
        },
        {
          name:  'Troop',
          value: 'Troop',
        },
        {
          name:  'Spell',
          value: 'Spell',
        },
        {
          name:  'Building',
          value: 'Building',
        },
      ]
  }

  componentDidMount() {
    console.log('inside componentDidMount')
    this.props.fetchData('/cards.json');
  }

  render() {
    const createItem = (item, key) =>
      <option
        key={key}
        value={item.value}
      >
        {item.name}
      </option>;

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return(
      <div className="row">
        <div className="row cardFilter">
          <select className="rarityCardFilter" onChange={event => this.props.logChange(event.target.value, name="rarity")}>
            {this.rarities.map(createItem)}
          </select>

          <select className="typeCardFilter" onChange={event => this.props.logChange(event.target.value, name="types")}>
            {this.types.map(createItem)}
          </select>
        </div>

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
