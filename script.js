const destinations = [
{
name:"Taj Mahal",
category:"India",
description:"One of the Seven Wonders of the World located in Agra.",
image:"https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200",
lat:27.1751,
lng:78.0421
},

{
name:"Rameshwaram",
category:"Spiritual",
description:"Famous pilgrimage destination in Tamil Nadu.",
image:"https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200",
lat:9.2881,
lng:79.3174
},

{
name:"Isha Foundation",
category:"Spiritual",
description:"Home of the Adiyogi statue near Coimbatore.",
image:"https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=1200",
lat:10.9797,
lng:76.7428
},

{
name:"Goa",
category:"Beach",
description:"India's most famous beach destination.",
image:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200",
lat:15.2993,
lng:74.1240
},

{
name:"Kashmir",
category:"India",
description:"Paradise on earth with stunning valleys.",
image:"https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200",
lat:34.0837,
lng:74.7973
},

{
name:"Bali",
category:"International",
description:"Indonesian island famous for temples and beaches.",
image:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200",
lat:-8.3405,
lng:115.0920
},

{
name:"Paris",
category:"City",
description:"City of love and home to the Eiffel Tower.",
image:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200",
lat:48.8566,
lng:2.3522
},

{
name:"Dubai",
category:"City",
description:"Luxury skyline and futuristic architecture.",
image:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200",
lat:25.2048,
lng:55.2708
},

{
name:"Santorini",
category:"International",
description:"Greek island known for white houses and sunsets.",
image:"https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200",
lat:36.3932,
lng:25.4615
},

{
name:"Tokyo",
category:"City",
description:"Modern technology meets rich culture.",
image:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200",
lat:35.6762,
lng:139.6503
},

{
name:"Maldives",
category:"Beach",
description:"Luxury overwater villas and turquoise waters.",
image:"https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200",
lat:3.2028,
lng:73.2207
}
];

const container = document.getElementById("cardsContainer");

const map = L.map("map").setView([20.5937,78.9629], 3);

L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
attribution:"© OpenStreetMap"
}
).addTo(map);

let markers = [];

function renderCards(data){

container.innerHTML="";

markers.forEach(marker=>{
map.removeLayer(marker);
});

markers=[];

data.forEach(destination=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`
<img src="${destination.image}" alt="${destination.name}">
<div class="card-content">
<h3>${destination.name}</h3>
<p>${destination.description}</p>
<span class="tag">${destination.category}</span>
</div>
`;

card.addEventListener("click",()=>{

map.setView(
[destination.lat,destination.lng],
8
);

});

container.appendChild(card);

const marker=L.marker([
destination.lat,
destination.lng
])
.addTo(map)
.bindPopup(
`<b>${destination.name}</b><br>${destination.description}`
);

markers.push(marker);

});

}

renderCards(destinations);

const searchInput =
document.getElementById("searchInput");

const categoryFilter =
document.getElementById("categoryFilter");

function filterDestinations(){

const searchValue =
searchInput.value.toLowerCase();

const categoryValue =
categoryFilter.value;

const filtered =
destinations.filter(destination=>{

const matchName =
destination.name
.toLowerCase()
.includes(searchValue);

const matchCategory =
categoryValue==="all" ||
destination.category===categoryValue;

return matchName && matchCategory;

});

renderCards(filtered);

}

searchInput.addEventListener(
"input",
filterDestinations
);

categoryFilter.addEventListener(
"change",
filterDestinations
);