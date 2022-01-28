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



    private
    def beer_params
        params.require(:beer).permit(:name, :serving_style, :brewery_id)
    end
end
