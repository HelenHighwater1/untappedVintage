class Beer < ApplicationRecord
    
    belongs_to :brewery
    has_many :reviews
    has_many :vintages, 
        through: :reviews
    has_one_attached :photo
    
    

    def self.search_beers(search_term)
        self.where('beer_name ILIKE ?', "%#{search_term}%")
    end
end
