class Api::StoriesController < ApplicationController
    wrap_parameters include: Server.attribute_names

    def index 
        @stories = Story.all 
        render :index 
    end

    def show  
        @story = Story.find_by(id: params[:id])
        render :show 
    end

    def create 
        @story = Story.new(story_params)
        if @story.save
            render :show 
        else
            render json: @story.errors.full_messages, status: 422
        end
    end

    def update 
        if @story.update(story_params)
            render :show 
        else
            render json: @story.errors.full_messages, status: 422
        end

    def destroy
        @story.destroy
    end

    private 
    
    def story_params
        params.require(:story).permit(:title, :body)
    end
    
end
