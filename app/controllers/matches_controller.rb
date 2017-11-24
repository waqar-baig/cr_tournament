class MatchesController < ApplicationController
  def show
    @match = Match.find(params[:id])
    @team = @match.teams.find_by(id: params[:team_id])
    if @team.blank?
      render text: '<h3>Team not found</h3>', layout: false
    end
  end

  def card_details
  	@match = Match.find(params[:id])
  	@decks = @match.decks.group_by(&:player)
  end
end
