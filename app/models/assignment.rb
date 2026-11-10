class Assignment < ApplicationRecord
  belongs_to :course
  has_many :submissions, :class_name => "AssignmentSubmission"

  validates_presence_of :title

end
