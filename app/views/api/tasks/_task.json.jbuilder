# frozen_string_literal: true

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