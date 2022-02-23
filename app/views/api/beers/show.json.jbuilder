json.extract! @beer, :id, :name, :brewery, :serving_style
json.photoUrl url_for(@beer.photo) if @beer.photo.attached?