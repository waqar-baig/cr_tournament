class TeamsMatch < ApplicationRecord
  belongs_to :match
  belongs_to :team
end
