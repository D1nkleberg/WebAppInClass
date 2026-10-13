class CreateAssignmentSubmissions < ActiveRecord::Migration[8.1]
  def change
    create_table :assignment_submissions do |t|
      t.references :assignment, null: false, foreign_key: true
      t.references :student, null: false, foreign_key: true
      t.string :text
      t.boolean :complete

      t.timestamps
    end
  end
end
