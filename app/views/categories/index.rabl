object false

child @categories, object_root: false do
  attributes :id, :name, :depth
  node :products do |p|
    p.products.map(&:id)
  end
  node :children do |c|
    c.children.map(&:id)
  end
end

child @products, object_root: false do
  attributes :id, :name, :price
  attribute  category_id: :category
end