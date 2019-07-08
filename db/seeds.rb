# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all
Task.destroy_all

50.times do
  User.create(
    email: Faker::Internet.email,
    password: 12_345_678,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    zip_code: Faker::Address.zip_code,
    is_tasker: Faker::Boolean.boolean,
    hourly_rate: Faker::Number.number(2),
    has_vehicle: Faker::Boolean.boolean,
    tasker_description: 'hello'
  )
end

20.times do
  Task.create(
    user_id: Faker::Number.number(1),
    tasker_id: Faker::Number.number(1),
    category_id: Faker::Number.number(1),
    description: Faker::Lorem.sentence(1),
    location: 'Los Angeles',
    task_date: '2019-08-11',
    task_start_time: '2020-01-01T08:00:00.000Z',
    completed: Faker::Boolean.boolean,
    vehicle_required: Faker::Boolean.boolean
  )
end

CATEGORIES = ['Yard Work',
              'Home Repairs',
              'Cleaning',
              'Furniture Assembly',
              'Mounting',
              'Help Moving',
              'Painting',
              'Pet Sitting',
              'Run Errands',
              'Plumbing'].freeze

CATEGORIES.each do |category|
  Category.create(
    name: category.to_s
  )
end

# DEMO USER

User.create(
  email: 'yonureker@gmail.com',
  password: '12345678',
  first_name: 'Onur',
  last_name: 'Eker',
  zip_code: 94_007
)
