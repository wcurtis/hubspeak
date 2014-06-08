class SoundbiteSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :track

  embed :ids, include: false
end
