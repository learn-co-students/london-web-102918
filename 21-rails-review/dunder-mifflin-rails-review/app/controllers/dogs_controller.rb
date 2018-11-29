class DogsController < ApplicationController

    def index
    end

    def show
        @dog = Dog.find_by_id(params[:id].to_i)
    end

end
