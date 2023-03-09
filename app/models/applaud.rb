# == Schema Information
#
# Table name: applauds
#
#  id           :bigint           not null, primary key
#  applauder_id :bigint           not null
#  story_id     :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Applaud < ApplicationRecord
    validates :story_id, :applauder_id, presence: true 
    validates :story_id, uniqueness: { scope: :applauder_id }

    belongs_to :story,
        foreign_key: :story_id,
        class_name: :Story 
    
    belongs_to :applauder,
        foreign_key: :applauder_id,
        class_name: :User
end
