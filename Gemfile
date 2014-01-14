source 'https://rubygems.org'

gem 'rails',              '4.0.2'
gem 'sqlite3'
gem 'sass-rails',         '~> 4.0.0.rc1'
gem 'uglifier',           '>= 1.3.0'
gem 'coffee-rails',       '~> 4.0.0'
gem 'jquery-rails',       '~> 3.0.4'
gem 'jquery-ui-rails',    '~> 4.1.1'
gem 'turbolinks'
gem 'jbuilder',           '~> 1.2'
gem 'sdoc',               group: :doc, require: false
gem 'spring',             group: :development

# My favourite gems
gem 'jquery-turbolinks'
gem 'bootstrap-sass',       '~> 3.0.3'
gem 'haml-rails',           '~> 0.5.3'
gem 'formtastic',           '~> 2.3.0.rc2'
gem 'formtastic-bootstrap', '~> 3.0.0.rc.2'
gem 'rabl'
gem 'oj'

group :development do
  gem 'annotate'
  gem 'better_errors'
  gem 'quiet_assets'

  gem 'hirb'
  gem 'binding_of_caller'
  gem 'awesome_print'

  gem 'guard'
  gem 'guard-livereload'
  gem 'rack-livereload'
  gem 'meta_request'
end


group :development, :test do
  gem 'pry-remote'
  gem 'pry-rails'
  gem 'pry-stack_explorer'
  gem 'pry-nav'

  gem 'rspec-rails'

  gem 'libnotify'
  gem 'rb-fsevent',                         require: false  if RUBY_PLATFORM.match(/darwin/)
  gem 'rb-inotify',                         require: false  unless RUBY_PLATFORM.match(/darwin/)

  gem 'fuubar'

  gem 'factory_girl_rails'
  gem 'rb-readline', require: false
end

group :test do

  gem 'capybara'
  gem 'poltergeist'

  gem 'guard-rspec'
  gem 'launchy'
  gem 'shoulda-matchers'
  gem 'database_cleaner'
  gem 'zeus'
end

group :production do
  gem 'rails_12factor'
  gem 'pg'
end

gem 'awesome_nested_set',   '~> 3.0.0.rc.3'