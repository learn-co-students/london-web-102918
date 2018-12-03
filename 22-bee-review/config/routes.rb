Rails.application.routes.draw do
  resources :flowers, only: [:index, :new, :create, :show]
  resources :hives
  resources :bees, only: [:index, :edit, :update]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
