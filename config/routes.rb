Rails.application.routes.draw do
  resources :scores
  resources :users
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#logged_in_user"
  post "/signup", to: "users#create"
end
