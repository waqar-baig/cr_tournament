class Match < ApplicationRecord

	has_many :teams_matches
	has_many :teams, through: :teams_matches
end
