import { connect } from 'react-redux'
import { cardsFetchData, handleChange, selectRarity, selectTypes } from '../actions'
import CardList from '../components/CardList'

const getVisibleCards = (cards=[], filter) => {
  let _cards = cards
  if (filter.rarity && filter.rarity != 'All') {
    _cards = _cards.filter(c => c.rarity == filter.rarity)
  }
  if (filter.cardType && filter.cardType != 'All') {
    _cards = _cards.filter(c => c.type == filter.cardType)
  }
  return _cards;
}

const mapStateToProps = state => {
  return {
    cards: getVisibleCards(state.cards, state.visibilityFilter),
    isLoading: state.cardsIsLoading,
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