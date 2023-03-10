# TODO: make a jbuilder for a specific show page 
# the do block makes a key of story and the extract is extracting the key:value pairs from story  
json.story do 
    json.extract! @story, :id, :title, :body, :author_id, :applauds, :created_at, :updated_at
    json.author @story.author.fullname
end

json.applauds do 
    @story.applauds.each do |applaud| 
        json.set! applaud.id do
            json.extract! applaud, :id, :applauder_id, :story_id
        end
    end
end
