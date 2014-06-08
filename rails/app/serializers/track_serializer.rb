class TrackSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :soundboard

  embed :ids, include: false
end
