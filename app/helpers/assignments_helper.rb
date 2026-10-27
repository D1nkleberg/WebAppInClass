module AssignmentsHelper

  def assignment_form_path(assignment)
    assignment.persisted? ? assignment_path(assignment) : course_assignments_path(@course)
  end

end
