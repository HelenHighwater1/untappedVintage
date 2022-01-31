class Beer < ApplicationRecord
    
    belongs_to :brewery
    has_many :reviews
    has_many :vintages, 
        through: :reviews
    has_one_attached :photo
    
end
