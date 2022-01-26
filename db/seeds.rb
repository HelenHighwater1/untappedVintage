# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all


demo_user = User.create!(
  username: "guest",
  password: "password",
  first_name: "Guest",
  last_name: "User",
  email: "guest@email.com"
)


###Users

user1 = User.create!(
  username: "G_Porter",
  password: "heylaura",
  first_name: "Gregory",
  last_name: "Porter",
  email: "gporter@gmail.com"
)
user2 = User.create!(
    username: "Hans_Gruber",
    password: "hans4ever",
    firstName: "Hans",
    lastName: "Gruber",
    country: "Germany",
    email: "Hans4Ever@gmail.de",
    imgUrl: "https://hansGrueber.jpg"
)


### Breweries


### Beers


###  Reviews


### Flavor Profiles



### Beer/ Flavor profile joins table

