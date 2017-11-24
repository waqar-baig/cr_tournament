Rails.application.routes.draw do
  get 'welcome/index'

  resources :players
  get 'matches/show'

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  mount ActionCable.server => '/cable'
  resources :matches do
    get :card_details, on: :member
    get :details, on: :member
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'welcome#index'
end
