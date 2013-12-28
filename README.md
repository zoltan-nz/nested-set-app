Nested Set App
==============

Todo:

- Setup awesome nested set gem
- Create category with subcategories
- Create product management
- Create a page where you can manage products and sort orders: Catalogs


###Models:

    Category:
        name        :string
        parent_id   :integer
        lft         :integer
        rgt         :integer
        depth       :integer


    Product:
        name        :string
        category_id :integer
        price       :decimal


    Catalog:
        name        :string

    Join tables:
        catalog-category
            catalog_id
            category_id
            sort_order :decimal

        catalog-product
            catalog_id
            product_id
            sort_order :decimal