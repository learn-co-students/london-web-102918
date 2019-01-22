class Product < ApplicationRecord
  has_many :purchased_products
  has_many :purchased, through: :purchased_products
end
