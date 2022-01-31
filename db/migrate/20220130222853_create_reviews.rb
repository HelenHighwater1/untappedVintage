class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :beer_id, null: false
      t.integer :vintage_id
      t.text :review
      t.integer :rating, null: false
      t.timestamps
    end
  add_index :reviews, :vintage_id
  end
end
