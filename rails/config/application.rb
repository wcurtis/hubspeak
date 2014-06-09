require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Hubspeak
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
    
    # Allow access from anyone for now
    # TODO: Lock this down to only hubspeak domains
    # See https://github.com/cyu/rack-cors
    #
    # NOTE: In order to have headers preserved when raising a 500 error, we have to do the insert_after
    # See: http://stackoverflow.com/a/21906977/540194
    config.middleware.insert_after Rails::Rack::Logger, Rack::Cors, :logger => Rails.logger do
      allow do
        origins '*'
        resource '*', :headers => :any, :methods => [:get, :post, :put, :patch, :delete, :options]
      end
    end

    Pusher.app_id = ENV['PUSHER_APP_ID']
    Pusher.key = ENV['PUSHER_KEY']
    Pusher.secret = ENV['PUSHER_SECRET']

    # Middleware for serving static ember files before all else
    # All www subdomain calls will check this, otherwise render index.html
    # TODO: Add conditional on this middleware for specific subdomain of www or @
    path = "#{config.root}/public_ember"
    config.middleware.insert_before ActionDispatch::Static, "EmberDispatch::Static", path
  end
end
