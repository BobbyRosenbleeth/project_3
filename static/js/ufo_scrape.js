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
  console.log(data);
  

  // Loop through and add marker for January
  for (var i = 0; i < data.January.length; i++) {
    var markerData = data.January[i];
    L.marker([markerData.lat, markerData.lng]).addTo(myMap);
    // if (markerData.Date.startsWith("1")) {

      
      // var lat = markerData.latitude;
      // var lng = markerData.longitude;
      // var marker = L.marker([lat, lng]).addTo(myMap);
      // marker.bindPopup("<b>" + markerData.City + ", " + markerData.State + "</b><br>" + markerData.Summary);
  //  }
  //  console.log(lat)
  }

  // Loop through and add marker for Februry
  for (var i = 0; i < data.February.length; i++) {
    var markerData = data.February[i];
    L.marker([markerData.lat, markerData.lng]).addTo(myMap);
    
    
    // if (markerData.Date.startsWith("2")) {
    //   var lat = markerData.lat;
    //   var lng = markerData.lng;
    //   var marker = L.marker([lat, lng]).addTo(myMap);
    //   marker.bindPopup("<b>" + markerData.City + ", " + markerData.State + "</b><br>" + markerData.Summary);
    // }
  }

  // Loop through and add marker for March
  for (var i = 0; i < data.March.length; i++) {
    var markerData = data.March[i];
    L.marker([markerData.lat, markerData.lng]).addTo(myMap);
    // if (markerData.Date.startsWith("3")) {
    //   var lat = markerData.lat;
    //   var lng = markerData.lng;
    //   var marker = L.marker([lat, lng]).addTo(myMap);
    //   marker.bindPopup("<b>" + markerData.City + ", " + markerData.State + "</b><br>" + markerData.Summary);
    // }
  }
}); 

