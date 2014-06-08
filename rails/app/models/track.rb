class Track < ActiveRecord::Base
  belongs_to :soundboard
  has_one :soundbite

  validates :soundboard, presence: true

  before_save :default_values

  def default_values
    self.play_count ||= 0
  end
end
