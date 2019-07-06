class Api::CategoriesController < ApplicationController
  def show
    @category = Category.find(params[:id])
    render :show
  end

  def index
    @categories = Category.all
    render :index
  end

  private

  def category_params
    params.require(:category).permit(
      :name
    )
  end
end
