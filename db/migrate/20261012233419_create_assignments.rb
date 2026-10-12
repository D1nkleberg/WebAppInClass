class CreateAssignments < ActiveRecord::Migration[8.1]
  def change
    create_table :assignments do |t|
      t.references :course, null: false, foreign_key: true
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
