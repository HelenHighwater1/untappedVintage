class AddUserIdToBeers < ActiveRecord::Migration[5.2]
  def change
    add_column :beers, :user_id, :integer
  end
end
