Rails.application.routes.draw do
  namespace :api do
    resources :posts
  end
  get 'posts/:id/edit', to: 'hello_world#index'
  get 'posts/:id', to: 'hello_world#index'
  get 'posts/new', to: 'hello_world#index'
  root 'hello_world#index'
end

