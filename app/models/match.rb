class Match < ApplicationRecord

  has_many :teams_matches
  has_many :teams, through: :teams_matches
  has_many :players, through: :teams
  has_many :decks
  has_many :banned_cards
  has_many :cards, through: :decks

  def as_json(opts = nil)
    more = {}
    more[:teams] = teams
    attributes.merge(more)
  end

  def store_deck(data)
    card = Card.find_by_uid(data["card_id"])
    players = self.teams.find_by_id(data["team_id"]).players
    if data["player_id"] == 1
      player = players[0]
    else
      player = players[1]
    end
    self.decks.create(card_id: card.id, team_id: data["team_id"], player_id: player.id)
  end

  def match_links
    'akjds'
  end

  rails_admin do
    # configure :player do
    #   label 'Owner of this ball: '
    # end
    edit do
      exclude_fields :teams_matches, :players
    end
    show do
      field :teams
      field :uuid
      field :match_links do
        pretty_value do
          bindings[:object].teams.map do |team|
            path = bindings[:view].show_path('matches', team_id: team.id).gsub('/admin', '')
            bindings[:view].tag(:a, href: path, target: '_blank') << team.name
          end.join('<br/>').html_safe
        end
      end
      field :players
      field :cards_details do
        pretty_value do
          bindings[:view].tag(:a, href: "/matches/#{bindings[:object].id}/card_details", target: '_blank', title: 'cards') << "Cards"
        end
      end
    end
  end

  def cards_details
    'fdfd'
  end
end
