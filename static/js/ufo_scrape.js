// Create Map
var myMap = L.map('map', {
    center: [39.833332,-98.58336],
    zoom: 15
});

//Add a tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);

// An array for each cities data
var data1 = janlist;
var data2 = feblist;
var data3 = marlist;

// Get lat & lng data from ufoscrape
d3.json("/ufomap").then(function(data){
  console.log(data);
  

  // Loop through and add marker 
  for (var i = 0; i < data1.length; i++) {
    var markerData = data1[i];

    if (data1.includes(markerData.month)) {
      var lat = markerData.latitude;
      var lng = markerData.longitude;
      var marker = L.marker([lat, lng]).addTo(myMap);
      marker.bindPopup("<b>" + markerData.City + ", " + markerData.State + "</b><br>" + markerData.Summary);
    }
  }
}); 





// //get the data from the site for january 2023
// $.get('https://nuforc.org/webreports/ndxe202301.html', function(jan23) {
//   //create an array to store the table data
//   const tableData1 = [];
//   //iterate through the table data by each row and separate out the td 
//   $(jan23).find('tr').each(function(row, tr) {
           
//     tableData1[row] = {
//         "Date": $(tr).find('TD:eq(0)').text(),
//         "City": $(tr).find('TD:eq(1)').text(),
//         "State": $(tr).find('TD:eq(2)').text(),
//         "Country": $(tr).find('TD:eq(3)').text(),
//         "Shape": $(tr).find('TD:eq(4)').text(),
//         "Duration": $(tr).find('TD:eq(5)').text(),
//         "Summary": $(tr).find('TD:eq(6)').text(),
//         "Posted": $(tr).find('TD:eq(7)').text(),
//         "Images": $(tr).find('TD:eq(8)').text(),
//     }
//   });
//   //Convert the tableData array to a JSON object
//   //const janData = JSON.stringify(tableData1);
//   console.log(tableData1);

//   // Assign table tableData 1 to janData
//   // Filter the tableData to only show data with city and state data
//   //const janData = tableData1;
//   var citiesAndstate = $.map([janData],function(item) {
//     return {
//       City:item.City,
//       State:item.State
//     };
//   });
//   //const janFilter = janData.filter(sighting => sighting.City && sighting.State);
//   //janData is our table turned into a JSON object
//   // log janData to confirm output
//   console.log(citiesAndstate);
 
//   // Create markers for Jan
//   //const janMarkers = L.markerClusterGroup();

      
//   // loop through data to find the lat and long
//   //for (var i = 0; i < cities.length; i++) {
//   //var city = cities[i].city;
//   //var state = cities[i].state;

//   // //Loop through the data to create markers for each sighting
//   // janFilter.forEach(function(sighting) {
//   //   const city = sighting.City;
//   //   const state = sighting.State;

//   //   // Use the Google Maps Geocoding API to get lat and long
//   //   $.getJSON("https://maps.googleapis.com/maps/api/geocode/json", {
//   //     address: city + "," + state,
//   //     key: "AIzaSyDNYsrvZeXaN6WKZGsfhWUbS3LCQ74ZEHY"
//   //   }, function(geodata) {
//   //     //Extract the lat and lng from the geocoding response
//   //     const lat = geodata.results[0].geometry.location.lat;
//   //     const lng = geodata.results[0].geometry.location.lng;
//   //     //console.log(city + "," + state + lat + "," + lng);
//   //     // Create a marker for each sighting 
      //const marker = L.marker([lat, lng]);
//   // marker.bindPopup("<b>" + sighting.City + ", " + sighting.State + "</b><br>" + sighting.Summary);
//   //     janMarkers.addLayer(marker); 
        
//   //   });
//   // });
//       //janData.forEach(function(sighting) {
//         //const city = sighting.City;
//         //const state = sighting.State;


//   // Add marker to Jan Map
//   //janMarkers.addTo(janMap);

// });

// // //get the data from the site for february 2023
// // $.get('https://nuforc.org/webreports/ndxe202302.html', function(feb23) {
// //   //create an array to store the table data
// //   const tableData2 = [];
// //   //iterate through the table data by each row and separate out the td 
// //   $(feb23).find('tr').each(function(row, tr) {       
// //     tableData2[row] = {
// //       "Date": $(tr).find('TD:eq(0)').text(),
// //       "City": $(tr).find('TD:eq(1)').text(),
// //       "State": $(tr).find('TD:eq(2)').text(),
// //       "County": $(tr).find('TD:eq(3)').text(),
// //       "Shape": $(tr).find('TD:eq(4)').text(),
// //       "Duration": $(tr).find('TD:eq(5)').text(),
// //       "Summary": $(tr).find('TD:eq(6)').text(),
// //       "Posted": $(tr).find('TD:eq(7)').text(),
// //       "Images": $(tr).find('TD:eq(8)').text(),
// //     }
// //   });
// //   //Convert the tableData array to a JSON object
// //   //const febData = JSON.stringify(tableData2);
// //   const febData = tableData2.filter(sighting => sighting.City && sighting.State);
// //   console.log(febData);

// //   //febData is our table turned into a JSON object
// //   // log febData to confirm output
  
// //   // Create markers for Feb
// //   const febMarkers = L.markerClusterGroup();

// //   //Add feb markers
// //   //tableData2.forEach(function(sighting) {
// //   //const lat = getLatitude(sighting.city + ", " + sighting.State);
// //   //const lng = getLongitude(sighting.city + ", " + sighting.State);
// //   //if (lat && lng) {
// //   //const marker = L.marker([lat, lng]);
// //   //marker.bindPopip(sighting.Summary);
// //   //markers.addLayer(marker);
  
// //   // Create feb markers
// //   febData.forEach(function(sighting) {
// //     const city = sighting.City;
// //     const state = sighting.State;

//     // // Use the Google Maps Geocoding API to get Lat and Lng
//     // //$.getJSON("https://maps.googleapis.com/maps/api/geocode/json", {
//     //   address: city + "," + state,
//     //   key: "AIzaSyDNYsrvZeXaN6WKZGsfhWUbS3LCQ74ZEHY"
//     // }, function(geodata) {
//     //   //Extract the lat and lng from the geocoding response
//     //   //const lat = geodata.results[0].geometry.location.lat;
//     //   //const lng = geodata.results[0].geometry.location.lng;
//     //   //console.log(city + "," + state + lat + "," + lng);
//     //   // Create a marker for each sighting 
//     //   const marker = L.marker([lat, lng]);
//     //   marker.bindPopup("<b>" + sighting.City + ", " + sighting.State + "</b><br>" + sighting.Summary);
//     //   febMarkers.addLayer(marker); 
        
// //     });
// //   });

// //   // Add feb markers
// //   febMarkers.addTo(febMap);

// // });


// // //get the data from the site for march 2023
// // $.get('https://nuforc.org/webreports/ndxe202303.html', function(mar23) {
// //   //create an array to store the table data
// //   const tableData3 = [];
// //   //iterate through the table data by each row and separate out the td 
// //   $(mar23).find('tr').each(function(row, tr) {
// //   tableData3[row] = {
// //     "Date": $(tr).find('TD:eq(0)').text(),
// //     "City": $(tr).find('TD:eq(1)').text(),
// //     "State": $(tr).find('TD:eq(2)').text(),
// //     "County": $(tr).find('TD:eq(3)').text(),
// //     "Shape": $(tr).find('TD:eq(4)').text(),
// //     "Duration": $(tr).find('TD:eq(5)').text(),
// //     "Summary": $(tr).find('TD:eq(6)').text(),
// //     "Posted": $(tr).find('TD:eq(7)').text(),
// //     "Images": $(tr).find('TD:eq(8)').text(),
// //     }
// //   });
// //   //Convert the tableData array to a JSON object
// //   //const marData = JSON.stringify(tableData3);
// //   const MarData = tableData3.filter(sighting => sighting.City && sighting.State);
// //   //marData is our table turned into a JSON object
// //   // log marData to confirm output
// //   console.log(marData);

// //   // Create markers for March
// //   const marchmarkers = L.markerClusterGroup();

// //   // Loop through the data to create markers for each sighting 
// //   marData.forEach(function(sighting) {
// //     const city = sighting.City;
// //     const state = sighting.State;

// //     // Use the Google Maps Geocoding API to get Lat and Lng
// //     $.getJSON("https://maps.googleapis.com/maps/api/geocode/json", {
// //       address: city + "," + state,
// //       key: "AIzaSyDNYsrvZeXaN6WKZGsfhWUbS3LCQ74ZEHY"
// //     }, function(geodata) {
// //       //Extract the lat and lng from the geocoding response
// //       const lat = geodata.results[0].geometry.location.lat;
// //       const lng = geodata.results[0].geometry.location.lng;
// //       //console.log(city + "," + state + lat + "," + lng);
// //       // Create a marker for each sighting 
// //       const marker = L.marker([lat, lng]);
// //       marker.bindPopup("<b>" + sighting.City + ", " + sighting.State + "</b><br>" + sighting.Summary);
// //       marchMarkers.addLayer(marker);        
// //     });
// //   });
  
// //   // Add feb markers
// //   marchMarkers.addTo(marchMap);
// // });
    

// // // Create Jan Map
// // var janMap = L.map('map', {
// //     center: [39.833332,-98.58336];
// //     zoom: 15
// // });

// // // Create Feb Map
// // var febMap = L.map('map', {
// //     center: [39.833332,-98.58336],
// //     zoom: 15
// // });

// // //Create March Map
// // var marchMap = L.map('map', {
// //     center: [39.833332,-98.58336],
// //     zoom: 15
// // });     

// // // Add a tile layer for Jan
//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   // maxZoom: 19,
    //attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//}).addTo(janMap);

// // // Add a tile layer for Feb
// // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //     maxZoom: 19,
// //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// // }).addTo(febMap);

// // // Add a tile layer for March
// // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //     maxZoom: 19,
// //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// // }).addTo(marchMap);
