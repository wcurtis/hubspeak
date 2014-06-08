class SoundboardSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :track
end
