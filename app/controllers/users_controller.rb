class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user, status: :ok
        else
            render json: { error: "user not found" }, status: :not_found
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "username is already taken" }, status: :unauthorized
        end
    end

    def logged_in_user
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: { error: "No user logged in" }
        end
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
