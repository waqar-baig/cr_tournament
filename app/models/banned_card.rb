class BannedCard < ApplicationRecord
  belongs_to :match
  belongs_to :card
end
