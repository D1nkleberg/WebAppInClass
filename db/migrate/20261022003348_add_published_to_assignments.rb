class AddPublishedToAssignments < ActiveRecord::Migration[8.1]
  def change
    add_column :assignments, :published, :boolean
    add_column :assignments, :published_at, :datetime
  end
end
