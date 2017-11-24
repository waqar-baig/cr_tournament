class AddVideoLinkToMatch < ActiveRecord::Migration[5.1]
  def change
  	add_column :matches, :video_link, :string
  end
end
