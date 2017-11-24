import { connect } from 'react-redux'
import { cardsFetchData, handleChange, selectRarity, selectTypes } from '../actions'
import CardList from '../components/CardList'

const getVisibleCards = (cards=[], filter, playerDeck) => {
  let _cards = cards
  if (filter.rarity && filter.rarity != 'All') {
    _cards = _cards.filter(c => c.rarity == filter.rarity)
  }
  if (filter.cardType && filter.cardType != 'All') {
    _cards = _cards.filter(c => c.type == filter.cardType)
  }
  let deck = []
  if (playerDeck.length < 8) {
    deck = playerDeck.slice(0, 8)
  } else {
    deck = playerDeck.slice(8, 16)
  }
  _cards = _cards.filter(card => {
    return deck.filter(c => card.idName == c.idName).length == 0
  })

  return _cards;
}

const mapStateToProps = state => {
  return {
    cards: getVisibleCards(state.cards, state.visibilityFilter, state.playerDeck),
    isLoading: state.cardsIsLoading,
    isHold: state.isHold,
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => {
      dispatch(cardsFetchData(url))
    },
    logChange: (option, name) => {
      if (name == "rarity") {
        dispatch(selectRarity(option))
      }
      else if (name == "types") {
        dispatch(selectTypes(option))
      }
    }
  }
}

const VisibleCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)

export default VisibleCardList