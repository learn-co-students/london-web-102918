class ItemsController < ApplicationController
  def create
    @item = Item.new(name: params[:name], description: params[:description], user_id: current_user.id)
    if @item.save
      render json: @item
    else
      render json: {error: "Unable to create item."}, status: 400
    end
  end
end
