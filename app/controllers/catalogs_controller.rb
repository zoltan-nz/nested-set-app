class CatalogsController < ApplicationController

  def index

    @catalogs = Catalog.all
    respond_to do |format|
      format.html
      format.json { render 'index.rabl', status: :ok}

    end


  end

  def new

  end

  def create
    @catalog = Catalog.new(catalog_params)
    @catalog.save!
  end

  def show

  end

  def catalog_params
    params[:catalog].permit(:name)
  end


end