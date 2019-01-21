class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render json: @user
    else
      render json: {error: "User not found."}, status: 404
    end
  end

  def create
    @user = User.new(username: params[:username], password: params[:password])
    if @user.save
      render json: @user
    else
      render json: {error: "Unable to create user."}, status: 400
    end      
  end

  def signin
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      render json: {token: issue_token({id: @user.id})}
    else
      render json: {error: "Username/password combination invalid."}, status: 404
    end
  end

  def validate
    @user = current_user
    if @user
      render json: {username: @user.username, token: issue_token({id: @user.id})}
    else
      render json: {error: "User not found."}, status: 404
    end
  end

  def get_inventory
    @user = current_user
    if @user
      render json: @user.items
    else
      render json: {error: "User not found."}, status: 404
    end
  end
end
