json.user do
    json.extract! @user, :id, :fullname, :email, :created_at, :updated_at
end