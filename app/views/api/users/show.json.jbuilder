json.extract! @user, :id, :username, :first_name, :country

if @user.photo.attached? 
    json.photoUrl url_for(@user.photo) 
else 
    json.photoUrl image_url('profile_default.png')
end