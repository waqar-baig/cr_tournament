export function cardsIsLoading(state = true, action) {
  switch (action.type) {
    case 'CARDS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function cards(state = [], action={}) {
  console.log('inside reducer#cards')
  switch (action.type) {
    case 'CARDS_FETCH_DATA_SUCCESS':
      return action.cards;
    case 'SELECT_RARITY':
      return state.filter(card => card.rarity == action.option);
    case 'SELECT_TYPES':
      return state.filter(card => card.type == action.option);
    default:
      return state
  }
}

export function playerDeck(state = [], action={}) {
  console.log('inside reducer#playerDeck')
  switch (action.type) {
    case 'SELECT_CARD':
      return [
        ...state,
        {
          _id: action.card._id,
          idName: action.card.idName
        }
      ];
    default:
      return state
  }
}
