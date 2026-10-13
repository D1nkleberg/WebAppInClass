class Student < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_and_belongs_to_many :courses
  has_many :assignments, :through => :courses
  has_many :assignment_submissions

  def name
    first_name + " " + last_name
  end

  def submissions_for_assignment(assignment)
    assignment_submissions.where(:assignment => assignment)
  end
end
