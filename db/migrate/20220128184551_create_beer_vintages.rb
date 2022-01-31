class CreateBeerVintages < ActiveRecord::Migration[5.2]
  def change
    create_table :beer_vintages do |t|
      t.integer :beer_id, null: false
      t.integer :vintage_id

      t.timestamps
    end
  end
end
