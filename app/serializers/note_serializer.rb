class NoteSerializer < ActiveModel::Serializer
  attributes :id, :text, :topic
  has_one :user
end
