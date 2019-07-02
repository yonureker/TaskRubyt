class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.integer :zip_code, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.boolean :is_tasker, default: false, null: false
      t.integer :hourly_rate
      t.boolean :has_vehicle, default: false
      t.text :tasker_description
      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
