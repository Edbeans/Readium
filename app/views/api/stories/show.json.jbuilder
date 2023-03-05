# TODO: make a jbuilder for a specific show page 
# the do block makes a key of story and the extract is extracting the key:value pairs from story  
json.story do 
    json.extract! @story, :id, :title, :body, :author_id
end