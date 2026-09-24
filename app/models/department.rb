class Department < ApplicationRecord

  def cool?
    name.match? "Computer"
  end
end
