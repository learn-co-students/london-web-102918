class Eater < ActiveRecord::Base
  has_many :pizzas

  def toppings
    toppings = []
end
