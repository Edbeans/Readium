class Api::SessionsController < ApplicationController
  def show
    if current_user 
      render json: current_user 
    else
      render json: { user: nil }
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user 
      login!(@user)
      render json: @user
    else
      @user = User.new(email: params[:user][:email])
      flash.now[:errors] = ['Invalid email or password']
      render json: { errors: ['The provided credentials were invalid.'] }, status: :unauthorized
    end
  end

  def destroy
    logout!
    render json: { message: 'success' }
  end
end
