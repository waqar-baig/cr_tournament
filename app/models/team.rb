class Team < ApplicationRecord

	has_many :teams_matches, dependent: :destroy
	has_many :matches, through: :teams_matches
  has_many :players
  has_many :decks
  has_many :cards, through: :decks

	# after_create_commit { MessageBroadcastJob.perform_later(self) }
  def as_json(opts = nil)
    more = {}
    more[:players] = players
    attributes.merge(more)
  end
end
