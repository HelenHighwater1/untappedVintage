json.extract! @review, :id, :user_id, :beer_id, :vintage_id, :body, :rating
json.photoUrl url_for(@review.photo) 