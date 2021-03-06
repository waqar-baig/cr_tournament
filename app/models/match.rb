class Match < ApplicationRecord

  has_many :teams_matches
  has_many :teams, through: :teams_matches
  has_many :players, through: :teams

  def as_json(opts = nil)
    more = {}
    more[:teams] = teams
    attributes.merge(more)
  end
end
