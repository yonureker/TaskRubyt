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

# DEMO USER

User.create(
  email: 'yonureker@gmail.com',
  password: '12345678',
  first_name: 'Onur',
  last_name: 'Eker',
  zip_code: 94_007
)
