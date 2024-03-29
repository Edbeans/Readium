# == Schema Information
#
# Table name: stories
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Story < ApplicationRecord
    validates :title, :body, presence: true 

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
    
    has_many :responses,
        foreign_key: :story_id,
        class_name: :Response,
        dependent: :destroy 

    has_many :applauds,
        foreign_key: :story_id,
        class_name: :Applaud,
        dependent: :destroy 
end
