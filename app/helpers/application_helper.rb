module ApplicationHelper

  def ac(path)
    'active' if current_page?(path)
  end

  def tree_select(nested_set)

  end

end
