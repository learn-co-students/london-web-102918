class Bee < ApplicationRecord
  has_many :flights
  has_many :flowers, through: :flights
  belongs_to :hive

  validates :name, uniqueness: true
  validates :name, presence: true
end
