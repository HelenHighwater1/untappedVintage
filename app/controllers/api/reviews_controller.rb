class Api::ReviewsController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]
    
    
    def show
        @review = Review.find_by(id: params[:id])
        if @review
            render :show
        else
            render json: ["We dont seem to have a review here"], status: 404
        end
    end
    
    def create
        puts review_params
        @review = Review.new(review_params)
        puts @review

        @review.user = current_user
        if @review.save
            render :show 
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def index 
        if !params[:beerId]
            @reviews = Review.all
        else
            @reviews = Review.where(beer_id: params[:beerId])
        end

        if @reviews
            render :index
        else
            render json: @reviews.errors.full_messages
        end

    end

    
    def update
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
        render :show
        else
        render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        render :index 
    end 
    

    private
    def review_params
        params.require(:review).permit(:user_id, :beer_id, :vintage_id, :body, :rating, :photo)
    end
end