class CreatePurchasedProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :purchased_products do |t|
      t.integer :purchase_id
      t.integer :product_id

      t.timestamps
    end
  end
end
