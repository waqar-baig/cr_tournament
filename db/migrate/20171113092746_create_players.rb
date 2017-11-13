class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :name
      t.string :contact_number
      t.belongs_to :team, foreign_key: true
      t.string :nick_name

      t.timestamps
    end
  end
end
