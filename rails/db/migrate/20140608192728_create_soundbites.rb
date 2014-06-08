class CreateSoundbites < ActiveRecord::Migration
  def change
    create_table :soundbites do |t|
      t.references :track, index: true
      t.string :name

      t.timestamps
    end
  end
end
