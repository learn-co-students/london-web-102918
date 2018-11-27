class AddOfficeIdToDoctors < ActiveRecord::Migration[5.2]
  def change
    add_column :doctors, :office_id, :integer
  end
end
