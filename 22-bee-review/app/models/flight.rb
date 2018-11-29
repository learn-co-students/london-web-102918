class Flight < ApplicationRecord
  belongs_to :flower
  belongs_to :bee
end
