# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Category.delete_all

4.times do |i|
  mc = Category.create!(name: "Main Category #{i}")

  3.times do |j|
    sc = Category.create!(name: "SubCategory - #{i} - #{j}", parent: mc)

    2.times do |k|
      ssc = Category.create!(name: "SubSubCategory - #{i} - #{j} - #{k}", parent: sc)

      5.times do |l|
        Product.create!(name: "Product of #{ssc.name}", category: ssc)
      end
    end





  end

end