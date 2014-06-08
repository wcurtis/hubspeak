class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.references :soundboard, index: true
      t.string :name
      t.integer :play_count

      t.timestamps
    end
  end
end
