class MainController < ApplicationController
  before_action :authenticate_student!

end
