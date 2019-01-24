class ProductsController < ApplicationController

  def index
    print Product.all
    render json: Product.all
  end
end
