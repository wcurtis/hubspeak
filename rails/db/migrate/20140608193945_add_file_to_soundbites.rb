class AddFileToSoundbites < ActiveRecord::Migration
  def self.up
    add_attachment :soundbites, :audio
  end

  def self.down
    remove_attachment :soundbites, :audio
  end
end
