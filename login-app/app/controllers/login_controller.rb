require 'bcrypt'
class LoginController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index 
        render html: "Welcome to Login Page!"
    end
    def create 
        uval = User.find_by('email': params[:email])
        if uval.nil? 
            render json: "User account does not exit"
        else 
            if (uval.authenticate(params[:password]))
                session[:current_user_id] = uval.id

                render json: "Successful login!!", status: 200
            else
                render json: "Error!", status: 401
            end

        end

    end
end
