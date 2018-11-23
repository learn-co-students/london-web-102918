Rails.application.routes.draw do
  resources :trains, only: [:index, :show]

  # get "/trains", to: 'trains#index', as: 'trains'
  # get "/trains/:id", to: 'trains#show', as: 'train'
end
