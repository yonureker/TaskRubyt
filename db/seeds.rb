# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

100.times do
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

