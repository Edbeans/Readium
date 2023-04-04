json.response do 
    json.extract! @response, :id, :story_id, :author_id, :body
    json.author @response.author.fullname 
end