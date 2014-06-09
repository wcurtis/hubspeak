class EmberController < ApplicationController

  # All calls that don't hit an ember_static file
  # should render index.html and have the Ember
  # app handle the routing
  def index
    render file: "public_ember/index.html"
  end
end
