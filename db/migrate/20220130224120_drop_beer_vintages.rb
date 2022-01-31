class DropBeerVintages < ActiveRecord::Migration[5.2]
  def change
    drop_table :beer_vintages
  end
end
