import { combineReducers } from 'redux'
import { cards, playerDeck, cardsIsLoading } from './cards'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  cards,
  cardsIsLoading,
  visibilityFilter,
  playerDeck
})

export default todoApp