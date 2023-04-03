class CreateResponses < ActiveRecord::Migration[7.0]
  def change
    create_table :responses do |t|
      t.references :story, null: false, foreign_key: {to_table: :stories}
      t.references :author, null: false, foreign_key: {to_table: :users}
      t.text :body, null: false 
      t.timestamps
    end
  end
end
