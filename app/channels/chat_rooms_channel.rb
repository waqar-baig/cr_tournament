class ChatRoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_rooms_#{params['chat_room_id']}_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def send_message(data)
    # @team = Team.create!(name: data['message'])
    # @team.teams_matches.create(match_id: data['chat_room_id'])
    MessageBroadcastJob.perform_later(data['message'])
  end
end