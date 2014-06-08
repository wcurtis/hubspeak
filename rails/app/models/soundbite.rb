class Soundbite < ActiveRecord::Base
  belongs_to :track

  has_attached_file :audio

  # TODO: Add audio file validation
  # validates_attachment_content_type :file, :content_type => /\Aimage\/.*\Z/

  validates :audio, :attachment_presence => true
  validates_with AttachmentPresenceValidator, :attributes => :audio
end
