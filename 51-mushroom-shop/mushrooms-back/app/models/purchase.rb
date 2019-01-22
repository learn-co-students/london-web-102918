class Purchase < ApplicationRecord
  has_many :purchased_products
  has_many :products, through: :purchased_products
end
