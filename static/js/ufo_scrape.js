// Create Map
var myMap = L.map('map', {
    center: [39.833332,-98.58336],
    zoom: 2
});

//Add a tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);


// Get lat & lng data from ufoscrape
d3.json("/ufomap").then(function(data){
  //console.log(data);
  

  // Loop through and add marker for January
  for (var i = 0; i < data.January.length; i++) {
    var markerData = data.January[i];
    var city = markerData.City;
    var state = markerData.State;
    L.marker([markerData.lat, markerData.lng]).addTo(myMap).bindPopup(`<h1>A UFO sighting occurred in ${city},${state}.</h1>`);
  console.log(markerData)
  }

  // Loop through and add marker for Februry
  for (var i = 0; i < data.February.length; i++) {
    var markerData = data.February[i];
    var city = markerData.City;
    var state = markerData.State;
    L.marker([markerData.lat, markerData.lng]).addTo(myMap).bindPopup(`<h1>A UFO sighting occurred in ${city},${state}.</h1>`);
    
  }

  // Loop through and add marker for March
  for (var i = 0; i < data.March.length; i++) {
    var markerData = data.March[i];
    var city = markerData.City;
    var state = markerData.State;
    L.marker([markerData.lat, markerData.lng]).addTo(myMap).bindPopup(`<h1>A UFO sighting occurred in ${city},${state}.</h1>`);
   
  }
}); 

