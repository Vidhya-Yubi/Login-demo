require 'bcrypt'
class UserController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index 
        current_user = User.find_by_id(session[:current_user_id])
        render json: current_user
    end 

    def create
        v = !params[:name].empty? and !params[:email].empty? and params[:password].empty?
        if v 
            d = User.create(
                'name': params[:name],
                'email': params[:email],
                'password': params[:password]
            )
            puts d 
            render json: "New User Added Successfully"
        else 
            render json: "New User not added"
        end
    end
    def show 
        v = User.find(params[:id])
        render json: v
    end

    def destroy
        p = User.find(params[:id])
        p.destroy
        render json: "User deleted"
    end
end
