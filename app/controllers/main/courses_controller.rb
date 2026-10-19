module Main
  class CoursesController < MainController
    before_action :set_course, only: %i[ show ]

    def index
      @courses = Course.all
    end

    def show
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_course
        @course = Course.find(params.expect(:id))
      end
  end
end
