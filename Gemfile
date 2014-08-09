source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.1'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
gem 'therubyracer',  platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

gem 'less-rails'

# User haml instead of html for better and easier fornt end coding
gem 'haml-rails'

# twitter bootstrap css & javascript toolkit
gem 'twitter-bootswatch-rails', '~> 3.2.0'

# twitter bootstrap helpers gem, e.g., alerts etc...
gem 'twitter-bootswatch-rails-helpers'

# Authentication
gem 'omniauth'                 # 外部アカウントでログインできる
gem 'omniauth-twitter'         # Omniauthを使ってTwitterログインできる
gem 'omniauth-facebook'        # Omniauthを使ってFacebookログインできる

# Uploader
gem 'carrierwave'              # 画像アップローダ
gem 'mini_magick'              # CarrierWaveでリサイズなどができるようになる
gem 'fog'                      # CarrierWaveでAmazon S3に保存できるようになる

gem 'acts-as-taggable-on'      # タグ機能を実装できる
gem 'kaminari'                 # ページャ
gem 'rails_autolink'           # URLの自動リンク化

group :development do
  gem 'thin'                   # 開発用サーバ 
  gem 'rails-erd'              # モデルのER図をPDFで出力してくれる
  gem 'spring'                 # RspecなどでRailsをプリロードする
  gem 'rails_best_practices'   # Railsのベストプラクティスを教えてくれる
  gem 'annotate', git: 'git://github.com/ctran/annotate_models.git' # テーブル情報をモデルファイルに追記してくれる
  # debug
  gem 'better_errors'          # エラー画面を見やすくする
  gem 'binding_of_caller'      # better_errorsのエラー画面でREPLが使える
  gem 'tapp'                   # プリントデバッグがしやすくなる
  gem 'pry-rails'              # railsでpryが使える
  gem 'pry-byebug'             # pryでデバックコマンドが使える
  gem 'awesome_print'          # プリントデバッグの出力を整形
  gem 'hirb'                   # SQLの結果を見やすく整形してくれる
  gem 'hirb-unicode'           # hirbの日本語対応
end

group :test do
  gem 'rspec'                  # テストツール
  gem 'rspec-rails'            # RailsでRspecが使える
  gem 'factory_girl_rails'     # テストデータの生成
  gem 'database_cleaner'       # テスト実行後にDBをクリア
  gem 'capybara'               # ブラウザでの操作をシミュレートしてテストができる
end


