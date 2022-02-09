class BookmarksController < ApplicationController
    def index
        if params[:user_id]
            user = User.find_by(id: params[:id])
            bookmarks = user.bookmarks
        else
            bookmarks = Bookmark.all
        end
        render json: bookmarks
    end

    def create
        bookmark = Bookmark.create(bookmark_params)
        render json: bookmark, status: :created
    end

    private

    def bookmark_params
        params.permit(:user_id, :note_id)
    end


end
