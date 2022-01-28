class Api::BreweriesController < ApplicationController

    before_action :require_signed_in, only: [:create]

    def index 
        @breweries = Brewery.all
        render :index

    end

    def create
        @brewery = Brewery.new(brewery_params)
            if @brewery.save
                render :show
            else
                render json: @user.errors.full_messages, status: 422
            end

    end

    def show
        @brewery = Brewery.find_by(id: params[:id])
            if @brewery
                render :show
            else
                render json: ["We don't seem to have that Brewery"], status: 422
            end
    end
        
    private
    def brewery_params
        params.require(:brewery).permit(:name, :country)
    end

end
