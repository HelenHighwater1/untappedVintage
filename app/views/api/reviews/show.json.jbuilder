json.extract! @review, :id, :user_id, :beer_id, :vintage_id, :body, :rating
if @review.photo.attached? 
    json.photoUrl url_for(@review.photo) 
else 
    json.photoUrl image_url('beer_icon.png')
end