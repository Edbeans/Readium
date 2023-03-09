@applauds.each do |applaud| 
    json.set! applaud.id do 
        json.extract! applaud, :id, :story_id, :applauder_id 
    end