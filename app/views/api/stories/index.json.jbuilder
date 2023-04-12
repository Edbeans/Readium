# TODO: show every story 
@stories.each do |story| 
    json.set! story.id do 
        json.extract! story, :id, :title, :body, :author_id, :created_at
    end
end