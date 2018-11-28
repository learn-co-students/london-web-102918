class Doctor < ApplicationRecord
  belongs_to :office
  validates :name, presence: true
  validates :name, uniqueness: true
  validates :specialty, presence: true
end
