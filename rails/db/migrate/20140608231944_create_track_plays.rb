class CreateTrackPlays < ActiveRecord::Migration
  def change
    create_table :track_plays do |t|
      t.references :track, index: true
      t.string :ip

      t.timestamps
    end
  end
end
