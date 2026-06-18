const mongoose = require("mongoose");
require("dotenv").config();

const Destination =
require("./models/Destination");

mongoose.connect(process.env.MONGO_URI);

const destinations = [
{
name:"Taj Mahal",
category:"India",
description:"One of the Seven Wonders of the World.",
image:"https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200",
latitude:27.1751,
longitude:78.0421
},
{
name:"Rameshwaram",
category:"Spiritual",
description:"Sacred pilgrimage destination.",
image:"https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200",
latitude:9.2881,
longitude:79.3174
},
{
name:"Isha Foundation",
category:"Spiritual",
description:"Home of the Adiyogi statue.",
image:"https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=1200",
latitude:10.9797,
longitude:76.7428
},
{
name:"Goa",
category:"Beach",
description:"Famous beach destination.",
image:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200",
latitude:15.2993,
longitude:74.1240
},
{
name:"Kashmir",
category:"India",
description:"Paradise on earth.",
image:"https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200",
latitude:34.0837,
longitude:74.7973
},
{
name:"Bali",
category:"International",
description:"Beautiful Indonesian island.",
image:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200",
latitude:-8.3405,
longitude:115.0920
},
{
name:"Paris",
category:"City",
description:"Home of Eiffel Tower.",
image:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200",
latitude:48.8566,
longitude:2.3522
},
{
name:"Dubai",
category:"City",
description:"Luxury and skyscrapers.",
image:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200",
latitude:25.2048,
longitude:55.2708
},
{
name:"Santorini",
category:"International",
description:"Famous Greek island.",
image:"https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200",
latitude:36.3932,
longitude:25.4615
},
{
name:"Tokyo",
category:"City",
description:"Technology meets tradition.",
image:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200",
latitude:35.6762,
longitude:139.6503
},
{
name:"Maldives",
category:"Beach",
description:"Luxury island paradise.",
image:"https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200",
latitude:3.2028,
longitude:73.2207
}
];

async function seedDatabase() {

  try {

    await Destination.deleteMany();

    await Destination.insertMany(destinations);

    console.log("Destinations Added");

    mongoose.connection.close();

  } catch (error) {

    console.log(error);

  }

}

seedDatabase();