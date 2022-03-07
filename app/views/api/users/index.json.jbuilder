json.array!(@users) do |user|
    json.id user.id
    json.username user.username
    json.first_name user.first_name
    json.country user.country
    if user.photo.attached?
        json.photoUrl url_for(user.photo) 
    else 
        json.photoUrl image_url('profile_default.png')
    end
end