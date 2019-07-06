# == Schema Information
#
# Table name: tasks
#
#  id               :bigint           not null, primary key
#  user_id          :integer          not null
#  tasker_id        :integer          not null
#  category_id      :integer          not null
#  description      :text             not null
#  location         :string           not null
#  task_date        :date             not null
#  task_start_time  :time             not null
#  completed        :boolean          default(FALSE)
#  vehicle_required :boolean          default(FALSE)
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Task < ApplicationRecord
  validates :user_id,
            :tasker_id,
            :category_id,
            :description,
            :location,
            :task_date,
            :task_start_time, presence: true

  belongs_to :user,
             primary_key: :id,
             foreign_key: :user_id,
             class_name: :User

  belongs_to :tasker,
             primary_key: :id,
             foreign_key: :tasker_id,
             class_name: :User

  belongs_to :category,
          primary_key: :id,
          foreign_key: :category_id,
          class_name: :Category
end
