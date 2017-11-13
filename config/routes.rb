Rails.application.routes.draw do
  resources :players
  get 'matches/show'

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  mount ActionCable.server => '/cable'
  resources :matches
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'hello_world#index'
end
