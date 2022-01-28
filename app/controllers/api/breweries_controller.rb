class Api::BreweriesController < ApplicationController

    before_action :require_signed_in

    def create
        @brewery = Brewery.new(brewery_params)
            if @brewery.save
                render :show
            else
                render json: @user.errors.full_messages, status: 422
            end

    end
        
    private
    def brewery_params
        params.require(:brewery).permit(:name, :country)
    end

end
