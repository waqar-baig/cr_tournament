class CreateBannedCards < ActiveRecord::Migration[5.1]
  def change
    create_table :banned_cards do |t|
      t.references :match, foreign_key: true
      t.references :card, foreign_key: true

      t.timestamps
    end
  end
end
