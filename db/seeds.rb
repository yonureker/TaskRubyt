# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'faker'

User.destroy_all
Task.destroy_all
Category.destroy_all

User.create(
  email: 'yonureker@gmail.com',
  password: '12345678',
  first_name: 'Onur',
  last_name: 'Eker',
  zip_code: 94_007,
  is_tasker: false,
  hourly_rate: '',
  has_vehicle: true,
  tasker_description: ''
)

User.create(
    email: 'test1@gmail.com',
    password: 12_345_678,
    first_name: "Fernando",
    last_name: "Muslera",
    zip_code: 38833,
    is_tasker: true,
    hourly_rate: 83,
    has_vehicle: true,
    tasker_description: 'I utilize my Toyota Sienna Van with no back seats to move all Couches, Mattress/Frames, Desks, Dressers, Mirrors, Rugs, and other Heavy and Odd Shaped Items. Van has Roof Rack and I have 2 Dollies, Tie-Down Ratchet Straps, Moving blankets, + Tools!'
)

User.create(
    email: 'test2@gmail.com',
    password: 12_345_678,
    first_name: "Lyiundama",
    last_name: "Nekadio",
    zip_code: 94292,
    is_tasker: true,
    hourly_rate: 36,
    has_vehicle: true,
    tasker_description: 'I ve mounted and hung many TVs, art works, and shelves of all sizes and weight safely and precisely where my clients wanted it. I make sure you will be completely satisfied with my work before I complete the job. '
)

User.create(
    email: 'test9@gmail.com',
    password: 12_345_678,
    first_name: "Bafetimbi",
    last_name: "Gomis",
    zip_code: 94292,
    is_tasker: true,
    hourly_rate: 36,
    has_vehicle: true,
    tasker_description: 'Efficient and experienced as a handyman and property caretaker. You are hiring someone with extensive experience hanging and mounting all kinds of items, from large TVs, shelves, curtains, etc. Efficient and prepared with all necessary equipment. '
)

User.create(
    email: 'test3@gmail.com',
    password: 12_345_678,
    first_name: "Martin",
    last_name: "Linnes",
    zip_code: 94292,
    is_tasker: true,
    hourly_rate: 93,
    has_vehicle: true,
    tasker_description: 'As an exhibiting visual artist with gallery experience I have a comprehensive understanding of setting arts onto walls, framing, hanging, mounting and displaying artwork on the best spot that caches and touches the eyes. I also have some carpentry handyman experience and work in a lot of interior'
)

User.create(
    email: 'test4@gmail.com',
    password: 12_345_678,
    first_name: "Younes",
    last_name: "Belhanda",
    zip_code: 94292,
    is_tasker: true,
    hourly_rate: 114,
    has_vehicle: false,
    tasker_description: 'I have equipment to get level mounts at an accurate height in dry wall and concrete. Things like: flat screens, frames, art, white boards, large mirrors, curtains, blinds, static window clings, signage, speakers, cameras, devices, shelving and more.'
)


# 10.times do
#   User.create(
#     email: Faker::Internet.email,
#     password: 12_345_678,
#     first_name: Faker::Name.first_name,
#     last_name: Faker::Name.last_name,
#     zip_code: Faker::Address.zip_code,
#     is_tasker: Faker::Boolean.boolean,
#     hourly_rate: Faker::Number.number(2),
#     has_vehicle: Faker::Boolean.boolean,
#     tasker_description: 'I utilize my Toyota Sienna Van with no back seats to move all Couches, Mattress/Frames, Desks, Dressers, Mirrors, Rugs, and other Heavy and Odd Shaped Items. Van has Roof Rack and I have 2 Dollies, Tie-Down Ratchet Straps, Moving blankets, + Tools!'
#   )
# end

CATEGORIES = ['Mounting & Instalation',
              'Moving & Packing',
              'Furniture Assembly',
              'Home Improvement',
              'General Handyman',
              'Heavy Lifting',
              'Painting',
              'Cleaning',
              'Run Errands',
              'Plumbing'].freeze

CATEGORIES.each do |category|
  Category.create(
    name: category.to_s
  )
end


#DEMO TASKS

Task.create(
  user_id: 5,
  tasker_id: 2,
  category_id: 1,
  description: 'I need help with moving 10 boxes to my apartment. You should be able to handle 150 lbs.',
  location: '825 Battery St. San Francisco CA',
  task_date: '2019-07-19',
  task_start_time: '15:30',
  completed: false,
  vehicle_required: true
)
