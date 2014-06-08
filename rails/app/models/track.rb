class Track < ActiveRecord::Base
  belongs_to :soundboard
  has_one :soundbite

  validates :soundboard, presence: true
end
