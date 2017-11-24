class Deck < ApplicationRecord
  belongs_to :card
  belongs_to :team
  belongs_to :player
  belongs_to :match
end
