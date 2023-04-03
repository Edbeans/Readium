# == Schema Information
#
# Table name: responses
#
#  id         :bigint           not null, primary key
#  story_id   :bigint           not null
#  author_id  :bigint           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Response < ApplicationRecord
    validates :story_id, :author_id, :body, presence: true 

    belongs_to :story, 
        foreign_key: :story_id,
        class_name: :Story

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User 
        
end
