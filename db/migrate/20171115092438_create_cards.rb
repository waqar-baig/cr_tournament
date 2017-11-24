class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :uid
      t.string :name
      t.string :rarity
      t.string :category
      t.text :description
      t.integer :elixir_cost
      t.string :display_name

      t.timestamps
    end
  end
end
