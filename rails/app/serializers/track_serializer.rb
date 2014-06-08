class TrackSerializer < ActiveModel::Serializer
  attributes :id, :name, :play_count
  has_one :soundboard, embed: :ids
  has_one :soundbite, embed: :ids, include: true
  
end
