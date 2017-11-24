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
    // case 'HOLD': case 'BAN_CARD': case 'SELECT_CARD':
    //   return true;
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

let secretCard = {
  _id: '',
  idName: ''
}

export function opponentCards(state=[], action={}) {
  switch (action.type) {
    case 'OPPONENT_SELECT_CARD':
      let card = action.card;
      console.log(state.length)
      if (state.length > 7 && state.length < 12) {
        // do nothing
      } else if (state.length > 11 || state.length > 3) {
        card = secretCard
      }
      return [
        ...state,
        {
          _id: card._id,
          idName: card.idName
        }
      ];
    default:
      return state
  }
}
