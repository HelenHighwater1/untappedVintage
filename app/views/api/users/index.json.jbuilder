json.array!(@users) do |user|
    json.id user.id
    json.username user.username
    json.first_name user.first_name
    json.country user.country
    if beer.photo.attached?
         json.photoUrl url_for(beer.photo) 
    end
end