class Review < ApplicationRecord
    belongs_to :user
    belongs_to :beer
    belongs_to :vintages, optional: true

    has_one_attached :photo

end
