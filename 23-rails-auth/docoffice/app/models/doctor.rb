class Doctor < ApplicationRecord
  belongs_to :office
  has_many :appointments
  has_many :patients, through: :appointments

  validates :name, presence: true
  validates :name, uniqueness: true
  validates :specialty, presence: true
end
