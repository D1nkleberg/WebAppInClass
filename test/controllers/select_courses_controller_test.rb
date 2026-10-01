require "test_helper"

class SelectCoursesControllerTest < ActionDispatch::IntegrationTest
  test "should get edit" do
    get select_courses_edit_url
    assert_response :success
  end

  test "should get update" do
    get select_courses_update_url
    assert_response :success
  end
end
