# frozen_string_literal: true

class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email],
                                     params[:user][:password])

    if @user
      login!(@user)
      render :show
    else
      # https://www.bennadel.com/blog/2434-http-status-codes-for-invalid-data-400-vs-422.htm
      render json: ['Incorrect email or password'], status: 422
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: {}, status: 404 #??
    end
  end
end
