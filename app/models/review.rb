class Review < ApplicationRecord
    # validates :beer_id
    belongs_to :user
    belongs_to :beer
    belongs_to :vintage, optional: true

    has_one_attached :photo 

end
