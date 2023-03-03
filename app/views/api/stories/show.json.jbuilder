# TODO: make a jbuilder for a specific show page 
json.story do
    json.extract! @story, :id, :title, :body, :author_id
end