json.array!(@breweries) do |brewery|
    json.id brewery.id
    json.name brewery.name
    json.country brewery.country
end