class AddLibrariesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :libraries do |t|
      t.string :name
      t.integer :capacity
      t.string :address
    end
  end
end
