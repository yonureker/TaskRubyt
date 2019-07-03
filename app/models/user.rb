# frozen_string_literal: true

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

class User < ApplicationRecord
  validates :email, :first_name, :last_name, :zip_code, :password_digest,
            :session_token, presence: true
  validates :zip_code, length: { minimum: 5, maximum: 5 }, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :is_tasker, inclusion: { in: [true, false] }

  after_initialize :ensure_session_token

  has_many :booked_tasks,
           primary_key: :id,
           foreign_key: :user_id,
           class_name: :Task

  has_many :hired_tasks,
           primary_key: :id,
           foreign_key: :tasker_id,
           class_name: :Task

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user&.password?(password) ? user : nil
  end

  def password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    save!
    session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
