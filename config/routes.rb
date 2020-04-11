Rails.application.routes.draw do
  namespace :api do
    resources :posts
  end
  get 'posts/:id/edit', to: 'api/posts#index'
  get 'posts/:id', to: 'api/posts#index'
  get 'posts/new', to: 'api/posts#index'
  root 'api/posts#handle_react'
end

