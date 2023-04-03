class Api::ResponsesController < ApplicationController
    
    def index
        @responses = Response.all
        render :index
    end

    def create
        @response = Response.new(response_params)
        if @response.save
            render :show
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        @response = Response.find_by(id: params[:id])
        render :show
    end

    def update
        @response = Response.find_by(id: params[:id])
        if @response.update(response_params)
            render :show
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @response = Response.find_by(id: params[:id])
        if @response && @response.destroy
            render json: ["You have deleted this response"]
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def response_params
        params.require(:response).permit(:story_id, :author_id, :body)
    end
end
