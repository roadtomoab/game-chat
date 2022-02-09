class NotesController < ApplicationController
    def index
        render json: Note.order(:id)
    end

    def show
        note = Note.find_by(id: params[:id])
        if note
            render json: note, status: :ok
        else
            render json: { error: "no note found" }, status: :not_found
        end
    end

    def create
        note = Note.create(note_params)
        render json: note, status: :created
    end

    def update
        note = Note.find_by(id: params[:id])
        if note
            note.update(note_params)
            render json: note, status: :accepted
        else
            render json: { error: "no note found" }, status: :not_found
        end
    end

    def destroy
        note = Note.find_by(id: params[:id])
        if note
            note.delete
            head :no_content
        else
            render json: { error: "no note found" }, status: :note
        end
    end

    private

    def note_params
        params.permit(:text, :topic, :user_id)
    end
end
