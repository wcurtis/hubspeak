class SoundbiteSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :track
end
