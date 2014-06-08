class Track < ActiveRecord::Base
  belongs_to :soundboard

  validates :soundboard, presence: true
end
