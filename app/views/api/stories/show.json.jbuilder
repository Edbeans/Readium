# TODO: make a jbuilder for a specific show page 
json.story do
    json.extract! @story, :id, :title, :body, :created_at, :updated_at
end