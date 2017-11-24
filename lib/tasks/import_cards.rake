# rake cr:import_cards RAILS_ENV=developement
namespace :cr do
  desc "Import CR cards data"
  task :import_cards => :environment do
    file = File.read("#{Rails.root}/public/cards.json")
    cards = JSON.parse(file)
    puts cards.count
    cards.each do |card|
      existed_card = Card.find_by_uid(card["_id"])
      if existed_card
        existed_card.update_attributes(name: card["idName"], rarity: card["rarity"], category: card["type"], description: card["description"], elixir_cost: card["elixirCost"], display_name: card["name"])
      else
        Card.create(uid: card["_id"], name: card["idName"], rarity: card["rarity"], category: card["type"], description: card["description"], elixir_cost: card["elixirCost"], display_name: card["name"])
      end
    end
  end
end
