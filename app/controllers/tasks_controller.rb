class TasksController < ApplicationController
  def index
  end

  def tasklist
    @all_tasks = Task.all
    render json: @all_tasks
  end

  def create
    @task = Task.create(task: params[:task], checked: params[:checked])
  end

  def update
  end

  def destroy
  end
end