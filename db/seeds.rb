# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

10.times do
  User.create(
    email: Faker::Internet.email,
    password: 12345678,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    zip_code: Faker::Address.zip_code,
    is_tasker: Faker::Boolean.boolean,
    hourly_rate: Faker::Number.number(2),
    has_vehicle: Faker::Boolean.boolean,
    tasker_description: "hello",
  )
end

20.times do
  Task.create(
    user_id: Faker::Name.number(1),
    tasker_id: Faker::Name.number(1),
    catogory_id: Faker::Name.number(1),
    description: Faker::Lorem.sentence(1, true),
    location: "Los Angeles",
    task_date: "2019-08-11",
    task_start_time: "14:53",
    completed: Faker::Boolean.boolean,
    vehicle_required: Faker::Boolean.boolean,
  )


