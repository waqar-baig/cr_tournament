import { connect } from 'react-redux'
import { cardsFetchData } from '../actions'
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
    isHold: state.isHold
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => {
      dispatch(cardsFetchData(url))
    }
  }
}

const VisibleCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)

export default VisibleCardList