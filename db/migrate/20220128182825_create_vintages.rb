class CreateVintages < ActiveRecord::Migration[5.2]
  def change
    create_table :vintages do |t|
       t.integer :year
       t.timestamps 
    end
    add_index :vintages, :year

  end
end
