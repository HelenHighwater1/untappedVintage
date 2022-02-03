json.array!(@reviews) do |review|
    json.id review.id
    json.user_id review.user_id
    json.beer_id review.beer_id
    json.vintage_id review.vintage_id
    json.body review.body
    json.rating review.rating
    if review.photo.attached?
         json.photoUrl url_for(review.photo) 
    end
end