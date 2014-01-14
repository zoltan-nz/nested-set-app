class WelcomeController < ApplicationController
  def index
    @categories = Category.order(lft: :asc, name: :asc)
  end
end
