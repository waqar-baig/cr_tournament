class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(card)
    ActionCable.server.broadcast "chat_rooms_1_channel", card
  end

  private

  def render_message(message)
    TeamsController.render partial: 'teams/team', locals: {team: message}
  end
end