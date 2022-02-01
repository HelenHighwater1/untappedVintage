class Api::BeersController < ApplicationController

    before_action :require_logged_in, only: [:create]
    
    
    def show
        @beer = Beer.find_by(id: params[:id])
        if @beer 
            render :show
        else
            render json: ["We don't seem to have that beer"], status: 404
        end
    end
    
    def create
        @beer = Beer.new(beer_params)
        if @beer.save
            render :show 
        else
            render json: @beer.errors.full_messages, status: 422
        end
    end

    def index 
        @beers = Beer.all
        if @beers
            render :index
        else
            render json: @beer.errors.full_messages
        end

    end

    
    def update
        @beer = Beer.find_by(id: params[:id])
        if @beer.update(beer_params)
        render :show
        else
        render json: @beer.errors.full_messages, status: 422
        end
    end

    def destroy
        beer = Beer.find_by(id: params[:id])
        beer.destroy
        render :index 
    end 
    

    private
    def beer_params
        params.require(:beer).permit(:name, :serving_style, :brewery_id)
    end
end
