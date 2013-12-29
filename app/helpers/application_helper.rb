module ApplicationHelper

  def ac(path)
    'active' if current_page?(path)
  end
end
