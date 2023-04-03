# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_02_234102) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "applauds", force: :cascade do |t|
    t.bigint "applauder_id", null: false
    t.bigint "story_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["applauder_id"], name: "index_applauds_on_applauder_id"
    t.index ["story_id", "applauder_id"], name: "index_applauds_on_story_id_and_applauder_id", unique: true
    t.index ["story_id"], name: "index_applauds_on_story_id"
  end

  create_table "responses", force: :cascade do |t|
    t.bigint "story_id", null: false
    t.bigint "author_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_responses_on_author_id"
    t.index ["story_id"], name: "index_responses_on_story_id"
  end

  create_table "stories", force: :cascade do |t|
    t.string "title", null: false
    t.text "body", null: false
    t.bigint "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_stories_on_author_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "fullname", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "applauds", "stories"
  add_foreign_key "applauds", "users", column: "applauder_id"
  add_foreign_key "responses", "stories"
  add_foreign_key "responses", "users", column: "author_id"
  add_foreign_key "stories", "users", column: "author_id"
end
