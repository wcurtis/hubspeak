class SoundbiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :url
  has_one :track

  def url
    result = object.audio.url(:original)

    if Rails.env.development?
      result = "http://local-api.hubspeak.com:7000#{result}"
    end

    result
  end

  embed :ids, include: false
end
