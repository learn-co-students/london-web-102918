class DogsController < ApplicationController

  # index
  get "/dogs" do
    @dogs = Dog.all
    erb :"dogs/index"
  end

  #new
  get "/dogs/new" do
   erb :"dogs/new"
  end

  # show
  get "/dogs/:id" do
    @dog = Dog.find(params[:id])
    erb :"dogs/show"
  end

  #create
  post "/dogs" do
    dog = Dog.create(params[:dog])
    redirect "/dogs/#{dog.id}"
  end

  # edit
  get "/dogs/:id/edit" do
    @dog = Dog.find(params[:id])
    erb :"dogs/edit"
  end

  # update
  patch "/dogs/:id" do
    dog = Dog.find(params[:id])
    dog.update(params[:dog])
    redirect "/dogs/#{dog.id}"
  end

  # delete
  delete "/dogs/:id" do
    dog = Dog.find(params[:id])
    dog.destroy
    redirect "/dogs"
  end
end
