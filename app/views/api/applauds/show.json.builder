json.applaud do 
    json.extract! @applaud, :id, :story_id, :applauder_id, :created_at 
end

