Rails.application.routes.draw do
  resources :bookmarks
  resources :notes

  resources :users do
    resources :bookmarks, only: [:index, :create]
  end
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#logged_in_user"
  post "/signup", to: "users#create"
end
