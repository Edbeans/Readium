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
            render json: ['Was not able to make your story!']
        end
    end

    def update 
        if @story.update(story_params)
            render :show 
        else
            render json: @story.errors.full_messages, status: 422
        end

    def destroy
        @story = Story.find(params[:id])
        if @story && @pin.destory
            render json: ['Story deleted.']
        else
            render json: @story.errors.full_messages, status: 422
    end

    private 
    
    def story_params
        params.require(:story).permit(:title, :body)
    end
    
end
