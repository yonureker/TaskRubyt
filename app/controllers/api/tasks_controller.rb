class Api::TasksController < ApplicationController

  def create
    @task = Task.new(task_params)

    if @task.save!
      render :show
    else
      render json: @task.error.full_messages, status: 402
    end
  end

  def show
    @task = Task.find(params[:id])
    render :show
  end

  def index
    @tasks = Task.all.where(user_id: current_user.id)
    render :index
  end

  def destroy
    @task = Task.find(params[:id])

    if @task.destroy
      render :show
    else
      render json: @task.errors.full_messages, status: 402
    end
  end

  private

  def task_params
    params.require(:task).permit(
      :user_id,
      :tasker_id,
      :category_id,
      :description,
      :location,
      :task_date,
      :task_start_time
    )
  end
end