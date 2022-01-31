class Vintage < ApplicationRecord
    has_many :beers,
        through: :reviews

    has_many :reviews
    
end
