import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cardsIsLoading, cardsFetchData } from '../actions';
import Card from './Card';
import BannedList from './BannedList'
import SelectedDeckList from '../containers/SelectedDeckList'

class CardList extends Component {

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
    let backdrop = <div />
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    } else if (this.props.isHold) {
      backdrop = <div className="backdrop" />
    }

    return(
      <div className="CardList">
        {backdrop}
        <div className="filter-block clearfix">
          <div className="filter">
            <div class="filter-inner">
              <label >Filter By</label>
              <select className="select" onChange={event => this.props.logChange(event.target.value, name="rarity")}>
                {this.rarities.map(createItem)}
              </select>
              <label >Filter By</label>
              <select className="select" onChange={event => this.props.logChange(event.target.value, name="types")}>
                {this.types.map(createItem)}
              </select>
            </div>
          </div>
          <BannedList />
        </div>
        <div className="deckbuilder-block">
          <div className="cards-picker-block">
            <ul className="cards">
              {this.props.cards.map(card => (
                <Card key={card._id} {...card} />
              ))}
            </ul>
          </div>
          <SelectedDeckList />
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.selectedRarity = this.props.selectedRarity,
    this.rarities = [
        {
          name: 'All Rarity',
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
          name: 'All Type',
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
}

export default CardList;
