# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Beer.delete_all
Review.delete_all
Brewery.delete_all

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
    first_name: "Hans",
    last_name: "Gruber",
    country: "Germany",
    email: "Hans4Ever@gmail.de",
    img_url: "https://hansGrueber.jpg"
)

user3 = User.create!(
    username: "Helen_E",
    password: "helloworld",
    first_name: "Helen",
    last_name: "Edwards",
    country: "USA",
    email: "hgedwards87@gmail.com",
    img_url: ""
)

user4 = User.create!(
    username: "Harry_P",
    password: "alohamora",
    first_name: "Harry",
    last_name: "Potter",
    country: "England",
    email: "harryPotter@wizerdingWorld.com",
    img_url: ""
)

user5 = User.create!(
    username: "Ron",
    password: "RonRon",
    first_name: "Ron",
    last_name: "Weasley",
    country: "England",
    email: "Ron@wizerdingWorld.com",
    img_url: ""
)
user6 = User.create!(
    username: "Hagrid",
    password: "Hagrid",
    first_name: "Hagrid",
    last_name: "Hagrid",
    country: "England",
    email: "Hagrid@wizerdingWorld.com",
    img_url: ""
)
user6 = User.create!(
    username: "Draco",
    password: "Draco",
    first_name: "Draco",
    last_name: "Malfoy",
    country: "England",
    email: "Draco@wizerdingWorld.com",
    img_url: ""
)
user7 = User.create!(
    username: "Remus",
    password: "Remus",
    first_name: "Remus",
    last_name: "Lupin",
    country: "England",
    email: "Remus@wizerdingWorld.com",
    img_url: ""
)

### Breweries

brewery1 = Brewery.create!(
  name: "Westvleteren Saint-Sixtus Abbey brewery",
  country: "Belgium"
  
)
brewery2 = Brewery.create!(
  name: "St Bernardus Brewery",
  country: "Belgium"

)
brewery3 = Brewery.create!(
  name: "Orval",
  country: "Belgium"

)
brewery4 = Brewery.create!(
  name: "Firestone Walker",
  country: "USA"

)
brewery5 = Brewery.create!(
  name: "Goose Island Brewery",
  country: "USA"

)
brewery6 = Brewery.create!(
  name: "Founders Brewing Co",
  country: "USA"

)
brewery7 = Brewery.create!(
  name: "North Coast Brewing Co",
  country: "USA"

)
brewery8 = Brewery.create!(
  name: "Stone Brewing",
  country: "USA"

)
brewery9 = Brewery.create!(
  name: "Meantime Brewery",
  country: "England"

)
brewery10 = Brewery.create!(
  name: "Brasserie de Rochefort",
  country: "Belgium"

)
brewery11 = Brewery.create!(
  name: "Brouwerij Girardin",
  country: "Belgium"

)
brewery12 = Brewery.create!(
  name: "Dogfish Head",
  country: "USA"

)
brewery13 = Brewery.create!(
  name: "Sierra Nevada",
  country: "USA"

)

### Beers

beer1 = Beer.create!(
  name: "Westvleteren 12",
  serving_style: "Serve in a challice or stemmed tulip glass, between 46°F- 57°F",
  brewery_id: brewery1.id
)
photo_1 = URI.open('https://preview.redd.it/ss9ndwsdfne31.jpg?width=960&crop=smart&auto=webp&s=dcb6ffc722a25e11afb67273ad015082d1713708')
beer1.photo.attach(io: photo_1, filename: "westvleteren")


beer2 = Beer.create!(
  name: "St Bernardus 12",
  serving_style:  "Serve in a challice or stemmed tulip glass, between 46°F- 57°F",
  brewery_id: brewery2.id
)
photo_2 = URI.open('https://www.beercartel.com.au/product_images/uploaded_images/tumblr-8635f763216d2dd0314440da1a0673bc-b3b02f39-500.jpg')
beer2.photo.attach(io: photo_2, filename: "St Bernardus 12")


beer3 = Beer.create!(
  name: "Orval",
  serving_style: "Serve in a challice or stemmed tulip glass, between 46°F- 57°F",
  brewery_id: brewery3.id
)
photo_3 = URI.open('https://brewpublic.com/wp-content/uploads/2018/03/image-of-Orval-courtesy-of-Merchand-du-Vin.jpg')
beer3.photo.attach(io: photo_3, filename: "orval")


beer4 = Beer.create!(
  name: "Parabola",
  serving_style: "Serve in a snifter or tulip glass, between 46°F- 57°F",
  brewery_id: brewery4.id
)
photo_4 = URI.open('https://ryansbooze.com/wp-content/uploads/2018/10/IMG_1085.jpg')
beer4.photo.attach(io: photo_4, filename: "parabola")


beer5 = Beer.create!(
  name: "Bourbon County Stout",
  serving_style: "Serve between 45°F- 55°F",
  brewery_id: brewery5.id
)
photo_5 = URI.open('https://cdn.shopify.com/s/files/1/0567/1262/6329/products/goose-island-bourbon-county-stout-2015-16-9oz-2506.jpg?v=1627037253')
beer5.photo.attach(io: photo_5, filename: "bourboncounty")


beer6 = Beer.create!(
  name: "KBS",
  serving_style: "Serve in a snifter or tulip glass, between 46°F- 57°F",
  brewery_id: brewery6.id
)
photo_6 = URI.open('https://www.mlive.com/resizer/B5JWgEsGgz0fjOb04N899XabNIE=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/grpress/news_impact/photo/kbsjpg-354d581d041123d1.jpg')
beer6.photo.attach(io: photo_6, filename: "KBS")


beer7 = Beer.create!(
  name: "Old Stock Ale",
  serving_style: "Serve in a pint glass between  50°F- 60°F",
  brewery_id: brewery7.id
)
photo_7 = URI.open('http://brewdrinkrun.com/wp-content/uploads/2015/04/1609581_10153118945547752_3303324530700025261_n-720x460.jpg')
beer7.photo.attach(io: photo_7, filename: "oldStockAle")


beer8 = Beer.create!(
  name: "Stone IRS",
  serving_style: "Serve in a stemmed tulip glass, ideally at 55°F",
  brewery_id: brewery8.id
)
photo_8 = URI.open('https://fiftytwobottles.files.wordpress.com/2011/08/irs.jpg')
beer8.photo.attach(io: photo_8, filename: "StoneIrs")


beer9 = Beer.create!(
  name: "Thomas Hardy's Ale",
  serving_style: "To be enjoyed at 13°C / 55°F, after allowing oxygenation in a large balloon glass. Savour quietly after dinner, in front of a crackling fire.",
  brewery_id: brewery9.id
)
photo_9 = URI.open('https://www.andoverclassicwines.com/images/sites/andoverclassicwines/labels/thomas-hardy-s-ale-golden-edition_1.jpg')
beer9.photo.attach(io: photo_9, filename: "ThomasHardy")


beer10 = Beer.create!(
  name: "Rochefort 10",
  serving_style: "Serve in a challice or stemmed tulip glass, between 46°F- 57°F",
  brewery_id: brewery10.id
)
photo_10 = URI.open('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2B7-JLQQKlpP5BNSRvxewslOrXGLlXHjfwg&usqp=CAU')
beer10.photo.attach(io: photo_10, filename: "Rochefort10")


beer11 = Beer.create!(
  name: "Girardin Gueuze",
  serving_style: "Pour very slowly into a stemmed tulip, snifter, or collins glass, at a temperature between  45°F- 55°F",
  brewery_id: brewery11.id
)
photo_11 = URI.open('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lZrBcydQ7UTNWGAShxHI_8-6PSKAqb2qfg&usqp=CAU')
beer11.photo.attach(io: photo_11, filename: "GG")


beer12 = Beer.create!(
  name: "Burton Baton",
  serving_style: "Serve in an IPA glass or a snifter, the ideal serving temp is 55°",
  brewery_id: brewery13.id
)
photo_12 = URI.open('https://tenemu.com/wp-content/uploads/2015/10/Dogfish-Head-Burton-Baton-Imperial-IPA.jpg')
beer12.photo.attach(io: photo_12, filename: "BB")


beer13 = Beer.create!(
  name: "Bigfoot",
  serving_style: "Serve in stemed tulip glass, the ideal serving temp is between 50°F- 55°",
  brewery_id: brewery13.id
)
photo_13 = URI.open('https://wtop.com/wp-content/uploads/2021/02/botw.jpg')
beer13.photo.attach(io: photo_13, filename: "bigfoot")


### Vintages 
vintage30	 =  Vintage.create!(year: 1999)
vintage31	 =  Vintage.create!(year: 2000)
vintage32	 =  Vintage.create!(year: 2001)
vintage33	 =  Vintage.create!(year: 2002)
vintage34	 =  Vintage.create!(year: 2003)
vintage35	 =  Vintage.create!(year: 2004)
vintage36	 =  Vintage.create!(year: 2005)
vintage37	 =  Vintage.create!(year: 2006)
vintage38	 =  Vintage.create!(year: 2007)
vintage39	 =  Vintage.create!(year: 2008)
vintage40	 =  Vintage.create!(year: 2009)
vintage41	 =  Vintage.create!(year: 2010)
vintage42	 =  Vintage.create!(year: 2011)
vintage43	 =  Vintage.create!(year: 2012)
vintage44	 =  Vintage.create!(year: 2013)
vintage45	 =  Vintage.create!(year: 2014)
vintage46	 =  Vintage.create!(year: 2015)
vintage47	 =  Vintage.create!(year: 2016)
vintage48	 =  Vintage.create!(year: 2017)
vintage49	 =  Vintage.create!(year: 2018)
vintage50	 =  Vintage.create!(year: 2019)
vintage51	 =  Vintage.create!(year: 2020)
vintage52	 =  Vintage.create!(year: 2021)
vintage53	 =  Vintage.create!(year: 2022)
vintage54	 =  Vintage.create!(year: 2023)
vintage55	 =  Vintage.create!(year: 2024)
vintage56	 =  Vintage.create!(year: 2025)
vintage57	 =  Vintage.create!(year: 2026)
###  Reviews


review1 = Review.create!(
  user_id: user1.id,
  beer_id: beer1.id,
  vintage_id: vintage48.id,
  body: 'This is the best beer on earth!',
  rating: 5,
)
rev_photo1 = URI.open('https://theculturetrip.com/wp-content/uploads/2016/11/-reuben-grayflickr.jpg')
review1.photo.attach(io: rev_photo1, filename: "rev_photo1")


review2 = Review.create!(
  user_id: user2.id,
  beer_id: beer1.id,
  vintage_id: vintage41.id,
  body: "It aged too long - it is completely flat and too sweet.  It tastes like a very nutty port",
  rating: 2,
)


review3 = Review.create!(
  user_id: user4.id,
  beer_id: beer1.id,
  vintage_id: vintage45.id,
  body: "Great beer!  Getting pretty flat though, it probably would have been best 2 years ago.  Still interesting to drink, nutty and mellow",
  rating: 4,
)

review4 = Review.create!(
  user_id: user5.id,
  beer_id: beer1.id,
  vintage_id: vintage50.id,
  body: "Great taste - still as bubbly as the new ones, maybe a touch mellower with a nice nuttiness",
  rating: 5,
)
review5 = Review.create!(
  user_id: user5.id,
  beer_id: beer2.id,
  vintage_id: vintage42.id,
  body: "Cellar aged for 10 years. Definitely the best cellar aged beer from my collection so far.  Mellowed out well, you can really taste the complexity",
  rating: 5,
)
rev_photo5 = URI.open('https://images.squarespace-cdn.com/content/59b02a56ccc5c51518e820d4/1606962742100-PYFRZAO1U05OD7Q04A2V/DSC02933.jpg?content-type=image%2Fjpeg')
review5.photo.attach(io: rev_photo5, filename: "rev_photo5")

review6 = Review.create!(
  user_id: user7.id,
  beer_id: beer2.id,
  vintage_id: vintage48.id,
  body: "Caramel, super smooth. Has aged very well.",
  rating: 5,
)

review7 = Review.create!(
  user_id: user6.id,
  beer_id: beer2.id,
  vintage_id: vintage50.id,
  body: "Raisins, plums, figs. Like a humbug candy it’s so smooth and sweet. Bread pudding notes in there. ",
  rating: 5,
)

review8 = Review.create!(
  user_id: user2.id,
  beer_id: beer1.id,
  vintage_id: vintage52.id,
  body: "De reviews zeggen één van de beste biertjes, dus laten we eens proeven! En proeven doe ik! Heerlijk zacht, moutig en zoet van smaak met lichte tonen van karamel, koffie en rozijnen! Heerlijk gebalanceerd, maar toch erg smaakvol! De reviews liegen niet!",
  rating: 5,
)


review9 = Review.create!(
  user_id: user7.id,
  beer_id: beer1.id,
  vintage_id: vintage42.id,
  body: " I would not recommend aging any beer as long as 11 years, the biggest issue is carbonation will begin to fail, the complexity is degraded, the alcohol was less noticeable but the pleasant aspects of the taste are diminished as well, I would not recommend aging, I know you can but, it's not as good, I would drink this beer as soon as possible.",
  rating: 4,
)

review10 = Review.create!(
  user_id: user6.id,
  beer_id: beer1.id,
  vintage_id: vintage49.id,
  body: "Poured the color of cold brew coffee and sports a manilla color head which leaves copious lacing.
The aroma was stone fruit and malts, I tried to find spices but failed. Still, excellent aroma.
The taste, wow; while it pretty much followed the aroma, the layers and power of flavors is impressive. Stone fruit mingling with biscuit like malts and they made an excellent pair.
The feel was very good, way too easy to drink. I expected something more viscous but this really works.
OA, excellent beer and so glad I got to try it!
",
  rating: 5,
)

review11 = Review.create!(
  user_id: user3.id,
  beer_id: beer1.id,
  vintage_id: vintage48.id,
  body: "This one had rested for about 5 years. It poured a dark plum to prune color with still a good level of carbonation. The aroma was wonderful stone fruit. The complex character was true to form as still to me the best beer in the world. It made the perfect Thanksgiving beer and made me appreciate the good things in the world. Cheers.",
  rating: 5,
)

review12 = Review.create!(
  user_id: user3.id,
  beer_id: beer3.id,
  vintage_id: vintage44.id,
  body: "Wow - this beer ages better than any other I've tried!  It has really mellowed out nicely",
  rating: 5,
)
rev_photo12 = URI.open('https://belgibeer.com/filemanager/userfiles/Orval_Blog/IMG_3939.jpg')
review12.photo.attach(io: rev_photo12, filename: "rev_photo12")

# review13 = Review.create!(
#   user_id: ,
#   beer_id: ,
#   vintage_id: ,
#   review: ,
#   rating: ,
#   img_url: 

# )
# review14 = Review.create!(
#   user_id: ,
#   beer_id: ,
#   vintage_id: ,
#   review: ,
#   rating: ,
#   img_url: 

# )
# review15 = Review.create!(
#   user_id: ,
#   beer_id: ,
#   vintage_id: ,
#   review: ,
#   rating: ,
#   img_url: 

# )
# review16 = Review.create!(
#   user_id: ,
#   beer_id: ,
#   vintage_id: ,
#   review: ,
#   rating: ,
#   img_url: 

# )
# review17 = Review.create!(
#   user_id: ,
#   beer_id: ,
#   vintage_id: ,
#   review: ,
#   rating: ,
#   img_url: 

# )
# review18 = Review.create!(
#   user_id: ,
#   beer_id: ,
#   vintage_id: ,
#   review: ,
#   rating: ,
#   img_url: 

# )
# review19 = Review.create!(
#   user_id: ,
#   beer_id: ,
#   vintage_id: ,
#   review: ,
#   rating: ,
#   img_url: 

# )
# review20 = Review.create!(
#   user_id: ,
#   beer_id: ,
#   vintage_id: ,
#   review: ,
#   rating: ,
#   img_url: 

# )
# review21 = Review.create!(
#   user_id: ,
#   beer_id: ,
#   vintage_id: ,
#   review: ,
#   rating: ,
#   img_url: 

# )
# review22 = Review.create!(
#   user_id: ,
#   beer_id: ,
#   vintage_id: ,
#   review: ,
#   rating: ,
#   img_url: 

# )

### Flavor Profiles



### Beer/ Flavor profile joins table


### Vintages
vintage1	 =  Vintage.create!(year: 1970)
vintage2	 =  Vintage.create!(year: 1971)
vintage3	 =  Vintage.create!(year: 1972)
vintage4	 =  Vintage.create!(year: 1973)
vintage5	 =  Vintage.create!(year: 1974)
vintage6	 =  Vintage.create!(year: 1975)
vintage7	 =  Vintage.create!(year: 1976)
vintage8	 =  Vintage.create!(year: 1977)
vintage9	 =  Vintage.create!(year: 1978)
vintage10	 =  Vintage.create!(year: 1979)
vintage11	 =  Vintage.create!(year: 1980)
vintage12	 =  Vintage.create!(year: 1981)
vintage13	 =  Vintage.create!(year: 1982)
vintage14	 =  Vintage.create!(year: 1983)
vintage15	 =  Vintage.create!(year: 1984)
vintage16	 =  Vintage.create!(year: 1985)
vintage17	 =  Vintage.create!(year: 1986)
vintage18	 =  Vintage.create!(year: 1987)
vintage19	 =  Vintage.create!(year: 1988)
vintage20	 =  Vintage.create!(year: 1989)
vintage21	 =  Vintage.create!(year: 1990)
vintage22	 =  Vintage.create!(year: 1991)
vintage23	 =  Vintage.create!(year: 1992)
vintage24	 =  Vintage.create!(year: 1993)
vintage25	 =  Vintage.create!(year: 1994)
vintage26	 =  Vintage.create!(year: 1995)
vintage27	 =  Vintage.create!(year: 1996)
vintage28	 =  Vintage.create!(year: 1997)
vintage29	 =  Vintage.create!(year: 1998)
vintage30	 =  Vintage.create!(year: 1999)
vintage31	 =  Vintage.create!(year: 2000)
vintage32	 =  Vintage.create!(year: 2001)
vintage33	 =  Vintage.create!(year: 2002)
vintage34	 =  Vintage.create!(year: 2003)
vintage35	 =  Vintage.create!(year: 2004)
vintage36	 =  Vintage.create!(year: 2005)
vintage37	 =  Vintage.create!(year: 2006)
vintage38	 =  Vintage.create!(year: 2007)
vintage39	 =  Vintage.create!(year: 2008)
vintage40	 =  Vintage.create!(year: 2009)
vintage41	 =  Vintage.create!(year: 2010)
vintage42	 =  Vintage.create!(year: 2011)
vintage43	 =  Vintage.create!(year: 2012)
vintage44	 =  Vintage.create!(year: 2013)
vintage45	 =  Vintage.create!(year: 2014)
vintage46	 =  Vintage.create!(year: 2015)
vintage47	 =  Vintage.create!(year: 2016)
vintage48	 =  Vintage.create!(year: 2017)
vintage49	 =  Vintage.create!(year: 2018)
vintage50	 =  Vintage.create!(year: 2019)
vintage51	 =  Vintage.create!(year: 2020)
vintage52	 =  Vintage.create!(year: 2021)
vintage53	 =  Vintage.create!(year: 2022)
vintage54	 =  Vintage.create!(year: 2023)
vintage55	 =  Vintage.create!(year: 2024)
vintage56	 =  Vintage.create!(year: 2025)
vintage57	 =  Vintage.create!(year: 2026)