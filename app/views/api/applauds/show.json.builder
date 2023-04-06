json.applaud do 
    json.extract! @applaud, :id, :applauder_id, :story_id, :created_at 
    json.applauder @applaud.applauder.fullname
end

