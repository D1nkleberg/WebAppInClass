class AddDueDateToAssignments < ActiveRecord::Migration[8.1]
  def change
    add_column :assignments, :due_date, :datetime
  end
end
