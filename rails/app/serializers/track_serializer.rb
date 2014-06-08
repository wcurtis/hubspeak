class TrackSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :soundboard
end
