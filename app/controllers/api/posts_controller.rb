class Api::PostsController < ApplicationController
  #other files involved includes
  #initializers/react_on_rails.rb - point to js/packs,posts-bundle.js

  layout "posts" #points to posts.html.erb in view/layout

  def handle_react
  end

  def index
    all_posts = Post.all
    render json: all_posts
  end

  def create
    post = Post.create(post_params)
    render json: post
  end

  def show
    post = Post.find(params[:id])
    render json: post
  end

  def update
    post = Post.find(params[:id])
    post.update(post_params)
    render json: post
  end

  def destroy
    Post.destroy(params[:id])
    head :ok
  end

  private

  def post_params
    params.permit(:title, :description, :is_published)
  end
end
