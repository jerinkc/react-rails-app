Rails.application.routes.draw do
  root "api/posts#index"
  namespace :api do
    resources :posts
  end
end
