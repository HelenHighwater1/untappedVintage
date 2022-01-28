class Beer < ApplicationRecord

    belongs_to :brewery

    has_many :vintages
    
end
