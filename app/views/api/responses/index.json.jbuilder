@responses.each do |response|
    json.set! response.id do 
        json.extract! response, :id, :story_id, :author_id, :body 
        json.author response.author.name 
    end
end