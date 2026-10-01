class SelectCoursesController < ApplicationController
  before_action :set_student

  def edit
  end

  def update
    @student.update(student_params)
    redirect_to student_path(@student)
  end

  private

  def set_student
    @student = Student.first
  end

  def student_params
    params.expect(student: [{ :course_ids => [] } ])
  end
end
