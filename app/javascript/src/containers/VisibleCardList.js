import { connect } from 'react-redux'
import { cardsFetchData, handleChange, selectRarity, selectTypes } from '../actions'
import CardList from '../components/CardList'

const getVisibleCards = (cards=[], filter) => {
  let _cards = cards.filter(t => !t.isBanned)
  switch (filter) {
    case 'SHOW_ALL':
      return _cards
    case 'SHOW_COMPLETED':
      return _cards.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return _cards.filter(t => !t.completed)
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    isLoading: state.cardsIsLoading,
    selectedRarity: "All"
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => {
      dispatch(cardsFetchData(url))
    },
    logChange: (option, name) => {
      if (option == 'All') {
        dispatch(cardsFetchData('/cards.json'))
      }
      else {
        if (name == "rarity") {
          dispatch(selectRarity(option))
        }
        else if (name == "types") {
          dispatch(selectTypes(option))
        }
      }
    }
  }
}

const VisibleCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)

export default VisibleCardList