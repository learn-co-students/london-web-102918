class CreatePurchases < ActiveRecord::Migration[5.2]
  def change
    create_table :purchases do |t|
      t.string :customer_name
      t.string :customer_address

      t.timestamps
    end
  end
end
