module WelcomeHelper

  def nested_li(objects, &block)
    objects = objects.order(:lft) if objects.is_a? Class

    return '' if objects.size == 0

    output = '<ul><li>'
    path = [nil]

    objects.each_with_index do |o, i|
      if o.parent_id != path.last
        if path.include?(o.parent_id)
          while path.last != o.parent_id
            path.pop
            output << '</li></ul>'
          end
          output << '</li><li>'
        else
          path << o.parent_id
          output << '<ul><li>'
        end
      elsif i != 0
        output << '</li><li>'
      end
      output << capture(o, path.size - 1, &block)
    end

    output << '</li></ul>' * path.length
    output.html_safe
  end

end
