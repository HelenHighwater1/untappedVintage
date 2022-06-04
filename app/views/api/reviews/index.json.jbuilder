json.array!(@reviews) do |review|
    json.id review.id
    json.user_id review.user_id
    json.user_name review.user.usernamegit 
    json.beer_id review.beer_id
    json.vintage_id review.vintage_id
    json.vintage_year review.vintage&.year
    json.body review.body
    json.rating review.rating
    json.created_at review.created_at
    if review.photo.attached?
         json.photoUrl url_for(review.photo) 
    else json.photoUrl image_url('beer_icon.png')
    end
end