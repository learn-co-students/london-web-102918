class AddGenreToLibsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :libraries, :genre, :string
  end
end
