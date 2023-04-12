@applauds.each do |applaud| 
    json.set! applaud.id do 
        json.extract! applaud, :story_id, :applauder_id 
        # json.applauder applaud.applauder.fullname
    end
end