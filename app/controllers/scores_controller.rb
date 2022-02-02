class ScoresController < ApplicationController
    def index
        render json: Score.all
    end

    def show
        score = Score.find_by(id: params[:id])
        if score
            render json: score, status: :ok
        else
            render json: { error: "score not found"}, status: :not_found
        end
    end

    def create
        score = Score.create(score_params)
        render json: score
    end

    private

    def score_params
        params.permit(:score, :user_id)
    end
end
