class Player < ApplicationRecord
  belongs_to :team
  has_many :decks
  has_many :cards, through: :decks
end
