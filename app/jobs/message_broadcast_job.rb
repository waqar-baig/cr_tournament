class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
  	match_id = message
    ActionCable.server.broadcast "chat_rooms_1_channel", message: message
  end

  private

  def render_message(message)
    TeamsController.render partial: 'teams/team', locals: {team: message}
  end
end