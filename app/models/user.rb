class User < ApplicationRecord
    has_secure_password

    has_many :notes
    has_many :bookmarks
    
    validates :username, presence: :true, uniqueness: :true
    validates :password, presence: :true
end
