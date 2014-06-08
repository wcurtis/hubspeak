class CreateSoundboards < ActiveRecord::Migration
  def change
    create_table :soundboards do |t|
      t.string :name

      t.timestamps
    end
  end
end
