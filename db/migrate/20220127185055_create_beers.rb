class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.string :serving_style  
      t.integer :brewery_id, null: false

      t.timestamps
    end
      add_index :beers, :name
      add_index :beers, :brewery_id
      
  end
end
