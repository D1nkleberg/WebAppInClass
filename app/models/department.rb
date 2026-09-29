class Department < ApplicationRecord
  has_many :courses

  def cool?
    name.match? "Computer"
  end
end
