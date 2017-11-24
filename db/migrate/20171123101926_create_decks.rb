class CreateDecks < ActiveRecord::Migration[5.1]
  def change
    create_table :decks do |t|
      t.references :card, foreign_key: true
      t.references :team, foreign_key: true
      t.references :player, foreign_key: true
      t.references :match, foreign_key: true

      t.timestamps
    end
  end
end
