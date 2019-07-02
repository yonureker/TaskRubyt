# == Schema Information
#
# Table name: users
#
#  id                 :bigint           not null, primary key
#  email              :string           not null
#  first_name         :string           not null
#  last_name          :string           not null
#  zip_code           :integer          not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  is_tasker          :boolean          default(FALSE), not null
#  hourly_rate        :integer
#  has_vehicle        :boolean          default(FALSE)
#  tasker_description :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
