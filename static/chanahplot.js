let janData = ufo_scrape.janData

// function usState(county) {
//     return county == 'USA'
// }

$.each(janData, function(index, value) {
    // Access the time, city, and state properties of each object
    var city = value.city;
    var states = value.state.filter(usState);
});

// Want to loop through the data to get the count of how many times each state is shown in the table

//function state(states) {
    //for (let i = 0; i < states.length; i++) {
   // console.log(states[i]);
  //}
//}

let stateCount = []

function getOccurrence(states, value) {
    var count = 0;
    states.forEach((v) => (v == value && count++));
    return count;
    stateCount.append(count)
}

// plot data into bar chart
//create BarChart
var trace1 = {
    x:states.slice(0,10).reverse(),
    y: stateCount,
    text: states.slice(0,10).reverse(),
    type: "bar",
    orientation: "h"
 };

 var data = [trace1]

 var layout = {
    title: 'States With Highest UFO Occurrences'
 }

 Plotly.newPlot('plot', data, layout)