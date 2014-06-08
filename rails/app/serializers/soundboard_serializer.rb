class SoundboardSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :tracks

  embed :ids, include: true
end
