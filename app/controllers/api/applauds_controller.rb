class Api::ApplaudsController < ApplicationController

    def index 
        @applauds = Applaud.all 
        render :index 
    end

    def show 
        @applaud = Applaud.find_by(id: params[:id])
        render :show 
    end

    def create 
        @applaud = Applaud.new(applaud_params)
        if @applaud.save 
            render :show
        else
            render json: ['Already applauded!']
        end
    end

    def destroy 
        @applaud = Applaud.find_by(id: params[:id]) 
        if @applaud && @applaud.destroy
            render json: ["You have unapplauded this story."]
        else
            render json: @user.errors.full_messages, status: 422 
        end 
    end

    private 

    def applaud_params 
        params.require(:applaud).permit(:applauder_id, :story_id)
    end
end
