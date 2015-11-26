# app.rb
require 'sinatra'

class ActivityFeedApp < Sinatra::Base
  get '/' do
    erb :feed
  end
end