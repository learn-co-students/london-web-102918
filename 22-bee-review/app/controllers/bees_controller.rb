class BeesController < ApplicationController
  def index
    @bees = Bee.all
  end

  def edit
    @bee = Bee.find(params[:id])
  end

  def update
    @bee = Bee.find(params[:id])
    if @bee.update(bee_params)
      redirect_to bees_path
    else
      puts "BEEEE NOOOOTTT VAAALLIIIDD"
    end
  end

  private

  def bee_params
    params.require(:bee).permit(:name, :queen, :hive_id)
  end
end
