// // // Create Maps for each Month
// // var janMap = L.map('January', {
// //     center: [39.833332,-98.58336],
// //     zoom: 2
// // });

// // var febMap = L.map('February', {
// //   center: [39.833332,-98.58336],
// //   zoom: 2
// // });

// // var marMap = L.map('March', {
// //   center: [39.833332,-98.58336],
// //   zoom: 2
// // });

// // //Add a tile layer for all 3 maps
// // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //   maxZoom: 19,
// //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// // }).addTo(janMap);

// // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //   maxZoom: 19,
// //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// // }).addTo(febMap);

// // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //   maxZoom: 19,
// //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// // }).addTo(marMap);


// // // Get lat & lng data from ufoscrape
// // d3.json("/ufomap").then(function(data){
// //   console.log(data);
  

// //   // Loop through and add marker for January
// //   for (var i = 0; i < data.January.length; i++) {
// //     var markerData = data.January[i];
// //     var city = markerData.City;
// //     var state = markerData.State;
// //     L.marker([markerData.lat, markerData.lng]).addTo(janMap).bindPopup(`<h1>A UFO sighting occurred in ${city},${state}.</h1>`);

// //   }

// //   // Loop through and add marker for Februry
// //   for (var i = 0; i < data.February.length; i++) {
// //     var markerData = data.February[i];
// //     var city = markerData.City;
// //     var state = markerData.State;
// //     L.marker([markerData.lat, markerData.lng]).addTo(febMap).bindPopup(`<h1>A UFO sighting occurred in ${city},${state}.</h1>`);
    
// //   }

//   // Loop through and add marker for March
//   for (var i = 0; i < data.March.length; i++) {
//     var markerData = data.March[i];
//     var city = markerData.City;
//     var state = markerData.State;
//     L.marker([markerData.lat, markerData.lng]).addTo(marMap).bindPopup(`<h1>A UFO sighting occurred in ${city},${state}.</h1>`);
   
//   }
// }); 

// // Connect Maps to the dropdown
// var January = document.getElementById("January");
// var February = document.getElementById("February");
// var March = document.getElementById("March");

// var monthSelect = document.getElementById("month-select");

// // Hide all maps initially
// January.style.display = "none";
// February.style.display = "none";
// March.style.display = "none";

// // Show maps based on dropdown selection
// monthSelect.onchange = function() {
//   var selectedValue = monthSelect.value;
//   if (selectedValue == "all") {
//     January.style.display = "block";
//     February.style.display = "block";
//     March.style.display = "block";
//   } else if (selectedValue == "January") {
//     January.style.display = "block";
//     February.style.display = "none";
//     March.style.display = "none";
//   } else if (selectedValue == "February") {
//     January.style.display = "none";
//     February.style.display = "block";
//     March.style.display = "none";
//   } else if (selectedValue == "March") {
//     January.style.display = "none";
//     February.style.display = "none";
//     March.style.display = "block";
//   }
// };
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