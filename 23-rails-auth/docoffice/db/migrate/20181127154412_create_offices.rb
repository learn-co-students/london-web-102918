class CreateOffices < ActiveRecord::Migration[5.2]
  def change
    create_table :offices do |t|
      t.string :address
      t.integer :capacity

      t.timestamps
    end
  end
end
