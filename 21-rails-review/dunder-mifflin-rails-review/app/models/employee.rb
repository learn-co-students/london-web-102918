class Employee < ApplicationRecord
    belongs_to :dog
    validates :alias, uniqueness: true
    validates :title, uniqueness: true
end
