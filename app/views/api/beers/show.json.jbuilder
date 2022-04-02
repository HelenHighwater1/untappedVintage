json.extract! @beer, :id, :name, :brewery, :serving_style, :user_id
if @beer.photo.attached? 
    json.photoUrl url_for(@beer.photo) 
else 
    json.photoUrl image_url('beer_icon.png')
end