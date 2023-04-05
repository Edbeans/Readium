@responses.each do |response|
    json.set! response.id do 
        json.extract! response, :id, :story_id, :author_id, :body, :created_at
        json.author response.author.fullname 
    end
end