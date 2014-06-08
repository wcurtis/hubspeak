class TrackPlay < ActiveRecord::Base
  belongs_to :track, counter_cache: :play_count
end
