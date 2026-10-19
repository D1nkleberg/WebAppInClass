module Main
  class AssignmentsController < MainController
    before_action :set_assignment, only: %i[ show ]

    def index
      @assignments = Assignment.all
    end

    def show
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_assignment
        @assignment = Assignment.find(params.expect(:id))
      end
  end
end
