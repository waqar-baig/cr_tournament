# Run Rails without hot reloading (static assets).
rails: rails s -b 0.0.0.0

# Build client assets, watching for changes.
rails-client-assets: rm -rf public/webpack/development || true && bundle exec rake react_on_rails:locale && yarn run build:dev:client

# Build server assets, watching for changes. Remove if not server rendering.
rails-server-assets: yarn run build:dev:server