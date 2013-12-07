JenHomepage::Application.routes.draw do

  get "album/index"

  get "contact/index"

  get "welcome/index"

  root :to => 'welcome#index'

end
