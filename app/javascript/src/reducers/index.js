import { combineReducers } from 'redux'
import { cards, playerDeck, cardsIsLoading } from './cards'
import { cardsBanned, opponentCards, isHold } from './cards'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  cards,
  cardsIsLoading,
  visibilityFilter,
  playerDeck,
  cardsBanned,
  opponentCards,
  isHold
})

export default todoApp