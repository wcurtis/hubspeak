require 'pusher'
 
Pusher.url = "http://#{Pusher.key}:#{Pusher.secret}@api.pusherapp.com/apps/#{Pusher.app_id}"
Pusher.logger = Rails.logger