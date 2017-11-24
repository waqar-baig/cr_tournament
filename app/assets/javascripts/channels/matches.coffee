Socket.default = Socket.cable.subscriptions.create {
    channel: "ChatRoomsChannel"
    chat_room_id: matchID
  },
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  card_banned: (cardID, cardName, teamID) ->
    @perform 'card_banned', card_id: cardID, card_name: cardName, team_id: teamID, match_id: matchID

  card_selected: (cardID, cardName, teamID, playerID) ->
    @perform 'card_selected', card_id: cardID, card_name: cardName, team_id: teamID, player_id: playerID, match_id: matchID
