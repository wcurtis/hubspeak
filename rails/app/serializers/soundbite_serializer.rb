class SoundbiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :file_name
  has_one :track

  def url
    result = object.audio.url(:original)

    if Rails.env.development?
      result = "http://local-api.hubspeak.com:7000#{result}"
    end

    result
  end

  def file_name
    object.audio_file_name
  end

  embed :ids, include: false
end
