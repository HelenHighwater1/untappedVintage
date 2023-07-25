json.extract! @review, :id, :user_id, :beer_id, :vintage_id, :body, :rating
if @review.photo.attached? 
    json.photoUrl url_for(@review.photo) 
else 
    json.photoUrl image_url('beer_icon.png')
end

json.vintage_year review.vintage&.year

# {
#     id: 123,
#     user_id: 456,
#     beer_id: 789,
#     photoUrl: "whatever.jpg",
#     vintage_year: 2016
# }