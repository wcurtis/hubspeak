class TrackSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :soundboard, embed: :ids
  has_one :soundbite, embed: :ids, include: true
  
end
