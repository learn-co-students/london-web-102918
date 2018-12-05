class FlowersController < ApplicationController
  def index
    @flowers = Flower.all
  end

  def show
    @flower = Flower.find(params[:id])
  end

  def new
    @flower = Flower.new
  end

  def create
    @flower = Flower.new(flower_params)
    if @flower.valid?
      @flower.save
      redirect_to @flower
    else
       flash[:error] = @flower.errors.full_messages
       redirect_to new_flower_path
    end
  end

  def flower_params
    params.require(:flower).permit(:name, :pollen_capacity, :bee_ids => [])
  end

end
