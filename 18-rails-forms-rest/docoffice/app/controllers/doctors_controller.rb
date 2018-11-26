class DoctorsController < ApplicationController
  before_action :find_doctor, only: [:show, :edit, :update, :destroy]
  def index
    @doctors = Doctor.all
  end

  def show
  end

  def new
    @doctor = Doctor.new
  end

  def create
    @doctor = Doctor.create(doctor_params)
    byebug
    redirect_to doctor_path(@doctor)
    # we will see! v4 vs v5
  end

  def edit
  end

  def update
    @doctor.update(name: params[:doctor][:name], specialty: params[:doctor][:specialty])
    redirect doctor
  end

  def destroy
    @doctor.destroy
    redirect doctors_path
  end

  private

  def find_doctor
    @doctor = Doctor.find(params[:id])
  end

  def doctor_params
    params.require(:doctor).permit(:name, :specialty)
  end
end
