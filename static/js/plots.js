// Create bar chart
// var myBarChart = ('barChart', {zoom: 2})

// Connect
d3.json('/statedata2').then(function(data){console.log(data);})  


let states = data.states
let stateCounts = data.counts

// plot data into bar chart
// create BarChart
// May or may not use this: function BuildChart(states, counts)
// Show the top 3 states for each month
function init() {
  var trace1 = {
      x: states.slice(0,4),
      y: stateCounts,//.slice(0,4),
      text: states.slice(0,4),
      type: "bar",
      orientation: "h"
  };

  var data = [trace1]

  var layout = {
      title: 'Highest UFO Occurrences by State'
  }

  Plotly.newPlot('plot', data, layout);
}


//Dropdown Menu

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#month-select").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#month-select");
  // Assign the value of the dropdown menu option to a variable
  let month = dropdownMenu.property("value");

  // Initialize x and y arrays
  let x = [];
  let y = [];

  if (month === 'January') {
    x = states.slice(0,4),
    y = stateCounts;
  }

  else if (month === 'February') {
    x = states.slice(0,4),
    y = stateCounts;
 }
  else if (month ==='March') {
    x = states.slice(0,4),
    y = stateCounts;
  }

  // Note the extra brackets around 'x' and 'y'
  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);
}

init();

//function init() {
  //d3.json("/statedata2").then(function (data) {
      // Set up the DropDown:
      //const month = data.date;
      //let DropDown = d3.select(`#month-select`);
      //month.forEach((date) => {
       // DropDown.append(`option`).text(date).property(`value`, date);
      //});
      //// Reset demographic info and visuals to first subject when page is refreshed.
      //const first = month[0];
   // BuildChart(first);
 // });
//}
   // Pull data for new subject into demo and visuals.
//function optionChanged(newMonth) {
  //BuildChart(newMonth);
//}

//init();

