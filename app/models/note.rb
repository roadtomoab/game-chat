class Note < ApplicationRecord
  belongs_to :user
  has_many :bookmarks
  has_many :users, through: :bookmarks
end
