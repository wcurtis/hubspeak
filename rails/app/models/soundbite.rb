class Soundbite < ActiveRecord::Base
  belongs_to :track

  has_attached_file :audio

  validates_attachment_content_type :audio, :content_type => ['audio/mp3']

  validates :audio, :attachment_presence => true
  validates_with AttachmentPresenceValidator, :attributes => :audio
end
