json.match do
  json.id @match.id
  json.uuid @match.uuid
  json.teams @match.teams do |team|
    json.id team.id
    json.name team.name
    json.players team.players do |player|
      json.id player.id
      json.name player.name
      json.nickName player.nick_name
    end
  end
end
