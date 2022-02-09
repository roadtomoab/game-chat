class AddTopicToNotes < ActiveRecord::Migration[7.0]
  def change
    add_column :notes, :topic, :string
  end
end
