# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

department = Department.create!(
  :name => "Computer Science"
)

course = Course.create!(
  :name => "Web Application Development",
  :department => department
)

student = Student.create!(
  :first_name => "Laney",
  :last_name => "Stroup"
)

student.courses << course
