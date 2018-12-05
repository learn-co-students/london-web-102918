class EmployeesController < ApplicationController

    def index
    end

    def show
        @employee = Employee.find_by_id(params[:id].to_i)
    end

    def new
        @employee = Employee.new
    end

    def create
        @employee = Employee.new(employee_params)
        if @employee.valid?
            @employee.save
            redirect_to employee_path(@employee)
        else
            redirect_to new_employee_path
        end
    end

    def edit
        @employee = Employee.find_by_id(params[:id].to_i)
    end

    def update
        employee = Employee.find_by_id(params[:id].to_i)
        if employee.update(employee_params)
            redirect_to employee_path(employee)
        else
            redirect_to edit_employee_path(employee)
        end
        
    end

    private

    def employee_params
        params.require(:employee).permit(
            :first_name,
            :last_name,
            :alias,
            :title,
            :office,
            :img_url,
            :dog_id
        )
    end

end
