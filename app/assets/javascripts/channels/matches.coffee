Socket.default = Socket.cable.subscriptions.create {
    channel: "ChatRoomsChannel"
    chat_room_id: ''
  },
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    messages.append data['message']

  card_banned: (cardID, cardName, teamID) ->
    @perform 'card_banned', card_id: cardID, card_name: cardName, team_id: teamID

  card_selected: (cardID, cardName, teamID, playerID) ->
    @perform 'card_selected', card_id: cardID, card_name: cardName, team_id: teamID, player_id: playerID
