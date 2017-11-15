class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message, team_id)
  	match_id = message
    ActionCable.server.broadcast "chat_rooms_1_channel", message: message,
      teamID: team_id
  end

  private

  def render_message(message)
    TeamsController.render partial: 'teams/team', locals: {team: message}
  end
end