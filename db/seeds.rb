# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

["Business", "Computer Science", "English"].each do |name|
  Department.create!(
    :name => name
  )
end

# Business
Course.create!(
  :name => "Accounting",
  :department => Department.find_by(name: "Business")
)

Course.create!(
  :name => "Management",
  :department => Department.find_by(name: "Business")
)

# Computer Science
Course.create!(
  :name => "Web Application Development",
  :department => Department.find_by(name: "Computer Science")
)

Course.create!(
  :name => "Python",
  :department => Department.find_by(name: "Computer Science")
)

Course.create!(
  :name => "Javascript",
  :department => Department.find_by(name: "Computer Science")
)

# English
Course.create!(
  :name => "English Composition",
  :department => Department.find_by(name: "English")
)

Course.create!(
  :name => "American Literature I",
  :department => Department.find_by(name: "English")
)

Course.create!(
  :name => "Critical Theory",
  :department => Department.find_by(name: "English")
)

# Assigments
Course.all.each do |course|
  3.times do |n|
    Assignment.create!(
      :title => "Assignment #{n}",
      :description => "This is assignment #{n} for course #{course.name}",
      course: course
    )
  end
end

4.times do |n|
  Student.create(
    :first_name => "Test",
    :last_name => "Student #{n}",
    :email => "student#{n}@lms.local",
    :password => "Pass1234"
  )
end

Student.all.each do |s|
  s.courses << Course.all.sample
end
