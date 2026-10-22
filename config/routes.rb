Rails.application.routes.draw do
  devise_for :students

  namespace(:main) do
    resources :courses, :only => [:index, :show]

    resources :assignments, :only => [:index, :show], :shallow => true do
      resources :assignment_submissions, :as => :submissions, :path => :submissions, :shallow => true
    end

    resources :select_courses

    root "dashboard#index"
  end

  scope(:admin) do
    resources :students
    resources :departments
    resources :courses
    resources :assignments do
      patch :update_status, :on => :member
    end
  end

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
end
