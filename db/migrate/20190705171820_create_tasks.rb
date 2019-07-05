class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :user_id, null: false
      t.integer :tasker_id, null: false
      t.integer :category_id, null: false
      t.text :description, null: false
      t.string :location, null: false
      t.date :task_date, null: false
      t.time :task_start_time, null: false
      t.boolean :completed, default: false
      t.boolean :vehicle_required, default: false
      t.timestamps
    end
  end
end
