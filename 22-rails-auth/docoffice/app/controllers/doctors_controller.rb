class DoctorsController < ApplicationController
  before_action :find_doctor, only: [:show, :edit, :update, :destroy]
  before_action :find_offices, only: [:new, :edit]
  before_action :find_patients, only: [:new, :edit]

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
    if @doctor.valid?
      redirect_to doctor_path(@doctor)
    else
      flash[:errors] = @doctor.errors.full_messages
      redirect_to new_doctor_path
    end
  end

  def edit
  end

  def update
    @doctor.update(doctor_params)
    if @doctor.valid?
      redirect_to doctor_path(@doctor)
    else
      flash[:errors] = @doctor.errors.full_messages
      redirect_to edit_doctor_path(@doctor)
    end

  end

  def destroy
    @doctor.destroy
    redirect_to doctors_path
  end

  private

  def doctor_params
    params.require(:doctor).permit(:name, :specialty, :office_id, patient_ids: [])
  end

  def find_doctor
    @doctor = Doctor.find(params[:id])
  end

  def find_offices
    @offices = Office.all.sort_by {|o| o.capacity }
  end

  def find_patients
    @patients = Patient.all.sort_by {|p| p.name }.reverse
  end
end
