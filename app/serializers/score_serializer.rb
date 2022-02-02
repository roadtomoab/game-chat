class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :score
  has_one :user
end
