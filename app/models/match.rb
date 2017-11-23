class Match < ApplicationRecord

  has_many :teams_matches
  has_many :teams, through: :teams_matches
  has_many :players, through: :teams

  def as_json(opts = nil)
    more = {}
    more[:teams] = teams
    attributes.merge(more)
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
    end
  end
end
