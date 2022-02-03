json.array!(@vintages) do |vintage|
    json.id vintage.id
    json.year vintage.year
end