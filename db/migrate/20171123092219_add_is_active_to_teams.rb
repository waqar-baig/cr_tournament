class AddIsActiveToTeams < ActiveRecord::Migration[5.1]
  def change
    add_column :teams, :is_active, :boolean, default: true
  end
end
