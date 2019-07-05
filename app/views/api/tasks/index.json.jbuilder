# frozen_string_literal: true

# partials = confusing
# json.partial! 'api/tasks/task', task: @task

@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id,
                  :user_id,
                  :tasker_id,
                  :category_id,
                  :description,
                  :location,
                  :task_date,
                  :task_start_time,
                  :completed,
                  :vehicle_required
  end
end
