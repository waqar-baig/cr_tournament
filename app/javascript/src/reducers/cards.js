export function cardsIsLoading(state = true, action) {
  switch (action.type) {
    case 'CARDS_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function isHold(state=false, action) {
  switch(action.type){
    case 'HOLD': case 'BAN_CARD': case 'SELECT_CARD':
      return true;
    default:
      return false;
  }
}

export function cards(state = [], action={}) {
  let diff = state
  switch (action.type) {
    case 'CARDS_FETCH_DATA_SUCCESS':
      return action.cards;
    case 'BAN_CARD': case 'OPPONENT_BAN_CARD':
      return state.filter(card => card._id != action.card._id);
    case 'SELECT_CARD':
      diff = state.filter(card => {
        if (card.idName == action.card.idName) {
          return false;
        }
        return action.card.state.playerDeck.filter(c => card.idName == c.idName).length == 0
      })
    default:
      console.log(diff)
      return diff;
  }
}

export function playerDeck(state = [], action={}) {
  switch (action.type) {
    case 'SELECT_CARD':
      let playerID = state.length < 8 ? 1 : 2
      Socket.default.card_selected(action.card._id, action.card.idName, window.currentTeamId, playerID)
      window.canSelectCard = false
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

export function cardsBanned(state = [], action={}) {
  switch (action.type) {
    case 'BAN_CARD':
      Socket.default.card_banned(action.card._id, action.card.idName, window.currentTeamId)
      window.canBanCard = false;
      window.canSelectCard = window.isFirstTeam;
      return [
        ...state,
        {
          _id: action.card._id,
          idName: action.card.idName
        }
      ];
    case 'OPPONENT_BAN_CARD':
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

export function opponentCards(state=[], action={}) {
  switch (action.type) {
    case 'OPPONENT_SELECT_CARD':
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
