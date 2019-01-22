class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :category
      t.integer :price
      t.string :quantity
      t.string :image_url
      

      t.timestamps
    end
  end
end
