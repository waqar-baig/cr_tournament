class Team < ApplicationRecord

	has_many :teams_matches
	has_many :matches, through: :teams_matches
  has_many :players

	# after_create_commit { MessageBroadcastJob.perform_later(self) }
end
