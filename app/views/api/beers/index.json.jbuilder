# @beers.each do |beer|
#   json.set! beer.id do
#    json.extract! beer, :id, :name, :brewery, :serving_style   
#   end
# end

json.array!(@beers) do |beer|
    json.id beer.id
    json.name beer.name
    json.brewery beer.brewery
end