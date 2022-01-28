class Brewery < ApplicationRecord
    validates: :name, uniqueness: true
    
    has_many :beers
    
    

    
end
