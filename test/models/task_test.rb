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

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
