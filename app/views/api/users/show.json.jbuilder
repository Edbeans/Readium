json.user do
    json.extract! @user, :id, :fullname, :email, :bio, :created_at, :updated_at
end