class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.belongs_to :category, index: true
      t.decimal :price

      t.timestamps
    end
  end
end
