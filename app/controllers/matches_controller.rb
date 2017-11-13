class MatchesController < ApplicationController
  def show
  	@match = Match.find(params[:id])
  	@team = Team.new
  end
end
