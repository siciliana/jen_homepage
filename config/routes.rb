JenHomepage::Application.routes.draw do
  get "contact/index"

  get "welcome/index"

  root :to => 'welcome#index'

end
