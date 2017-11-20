let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const handleCardClick = card => {
  return selectCard(card)
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const selectCard = card => {
  console.log("card.idName")
  return {
    type: 'SELECT_CARD',
    card
  }
}


export const banCard = card => {
  console.log("card.idName")
  return {
    type: 'BAN_CARD',
    card
  }
}

export function cardsIsLoading(bool) {
  return {
    type: 'CARDS_IS_LOADING',
    isLoading: bool
  };
}

export function cardsFetchDataSuccess(cards) {
  return {
    type: 'CARDS_FETCH_DATA_SUCCESS',
    cards
  };
}

export function cardsFetchData(url) {
  return (dispatch) => {
    dispatch(cardsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(cardsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((cards) => dispatch(cardsFetchDataSuccess(cards)));
  };
}