class ChatRoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_rooms_#{params['chat_room_id']}_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def card_banned(data)
    # @team = Team.create!(name: data['message'])
    # @team.teams_matches.create(match_id: data['chat_room_id'])
    data['action'] = 'card_banned'
    MessageBroadcastJob.perform_later(data)
  end

  def card_selected(data)
    data['action'] = 'card_selected'
    MessageBroadcastJob.perform_later(data)
  end

end