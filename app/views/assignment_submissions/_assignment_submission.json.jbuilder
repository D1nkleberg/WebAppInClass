json.extract! assignment_submission, :id, :assignment_id, :student_id, :text, :complete, :created_at, :updated_at
json.url assignment_submission_url(assignment_submission, format: :json)
