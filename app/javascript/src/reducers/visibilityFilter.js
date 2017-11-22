// const visibilityFilter = (state = 'SHOW_ALL', action) => {
//   switch (action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return action.filter
//     default:
//       return state
//   }
// }
export function visibilityFilter(state=true, action) {
  switch (action.type) {
    case 'SELECT_TYPES': case 'SELECT_RARITY':
      return {
        rarity: action.rarity || state.rarity,
        cardType: action.cardType || state.cardType
      }
    default:
      return state
  }
}
