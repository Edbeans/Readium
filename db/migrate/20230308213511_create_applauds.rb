class CreateApplauds < ActiveRecord::Migration[7.0]
  def change
    create_table :applauds do |t|
      t.references :applauder, null: false, foreign_key: {to_table: :users}
      t.references :story, null: false, foreign_key: {to_table: :stories}

      t.timestamps
    end
    add_index :applauds, [:applauder_id, :story_id], unique: true 
    add_index :applauds, [:story_id, :applaud_id]
  end
end
