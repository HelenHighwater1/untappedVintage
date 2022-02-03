Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

 root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :beers, only: [:create, :index, :show, :update, :destroy]
    resources :breweries, only: [:create, :index, :show]
    resource :user, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :reviews, only: [:create, :index, :show, :update, :destroy]
    resources :vintages, only: [:index, :create]
  end


end





