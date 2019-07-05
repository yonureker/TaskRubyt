# frozen_string_literal: true

json.extract! user, :id,
              :email,
              :first_name,
              :last_name,
              :zip_code,
              :is_tasker,
              :hourly_rate,
              :has_vehicle,
              :tasker_description
