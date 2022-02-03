class Api::VintagesController < ApplicationController

    
    def create
        @vintage = Vintage.new(vintages_params)
        if @vintage.save
            render :index 
        else
            render json: @vintage.errors.full_messages, status: 422
        end
    end

    def index 
        @vintages = Vintage.all
        if @vintages
            render :index
        else 
            render json: @vintages.errors.full_messages, status: 422
        end

    end

  

    private
    def vintages_params
        params.require(:vintage).permit(:year)
    end
end
