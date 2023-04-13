// var myBarChart = ('barChart', {zoom: 2})

// Load Data
/*d3.json('/statedata2').then(function(data) {
  //console.log(data);
  var stateData = data
  var jsonObject = JSON.parse(stateData);

  var month1 = jsonObject.January;
  var month2 = jsonObject.February;
  var month3 = jsonObject.March;

  var janCount = jsonObject.January.count;
  var janStates = jsonObject.January.states;
  var febCount = jsonObject.February.count;
  var febStates = jsonObject.February.states;
  var marCount = jsonObject.March.count;
  var marStates = jsonObject.March.states;

  console.log(month1);
  console.log(month2);
  console.log(month3);
  console.log(janCount);
  console.log(janStates);
  console.log(febCount);
  console.log(febStates);
  console.log(marCount);
  console.log(marStates);
  
  /*for (var i=0; i < January.length; i++) {
    var stateData = data.January[i];
    var ufoCount = stateData.count;
    var state = stateData.states;
    console.log(ufoCount, state)
  }
})

// Identify each month
/*d3.json('/statedata2').then(function(data) {
  var January = data.products.map(d => d.JStateDF);
  var February = data.products.map(d => d.FStateDF);
  var March = data.products.map(d => d.MStateDF);
  console.log(January, February, March)
})

// Connect
// d3.json('/statedata2').then(function(data){console.log(data);})
let state = []
let stateCounts = []

/*d3.json('/statedata2').then(function(data){
  let state = data.products.map(d => d.states);
  let stateCounts = data.products.map(d => d.counts);
  console.log(state, stateCounts);
  init();
})

// Show the top 3 states for each month
function init() {
  var trace1 = {
      x: state.slice(0,4),
      //data.map(row => row.states).slice(0,4),
      y: stateCounts,
      //data.map(row => row.counts),
      //
      text: state.slice(0,4),
      //data.map(row => row.states).slice(0,4),
      //
      type: "bar",
      //orientation: "h"
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
  //Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#month-select");
  //Assign the value of the dropdown menu option to a variable
  let month = dropdownMenu.property("value");

  //Initialize x and y arrays
  let x = [];
  let y = [];

 if (month === '01') {
   x = states.slice(0,4).reverse(),
   y = stateCounts;
 }

 else if (month === '02') {
   x = states.slice(0,4).reverse(),
   y = stateCounts;
}
 else if (month ==='03') {
   x = states.slice(0,4).reverse(),
   y = stateCounts;
 }

  // Note the extra brackets around 'x' and 'y'
 Plotly.restyle("plot", "x", [x]);
 Plotly.restyle("plot", "y", [y]);
}

init();

function init() {
  d3.json("/statedata2").then(function (data) {
      Set up the DropDown:
      const month = data.date;
      let DropDown = d3.select(`#month-select`);
      month.forEach((date) => {
       DropDown.append(`option`).text(date).property(`value`, date);
      });
      // Reset demographic info and visuals to first subject when page is refreshed.
      const first = month[0];
 BuildChart(first);
  });
}
//Pull data for new subject into demo and visuals.
function optionChanged(newMonth) {
  BuildChart(newMonth);
}

init();

// Load Data using d3
d3.json('/statedata2').then(function(data) {
  var stateData = data;
  var month1 = stateData.January;
  var month2 = stateData.February;
  var month3 = stateData.March;

  var janCount = month1.count;
  var janStates = month1.states;
  var febCount = month2.count;
  var febStates = month2.states;
  var marCount = month3.count;
  var marStates = month3.states;

  console.log(month1);
  console.log(month2);
  console.log(month3);
  console.log(janCount);
  console.log(janStates);
  console.log(febCount);
  console.log(febStates);
  console.log(marCount);
  console.log(marStates);

  // Populate state and stateCounts arrays
  state = janStates.slice(0, 4).concat(febStates.slice(0, 4)).concat(marStates.slice(0, 4));
  stateCounts = janCount.slice(0, 4).concat(febCount.slice(0, 4)).concat(marCount.slice(0, 4));

  init();
})

// Show the top 3 states for each month
function init() {
  var trace1 = {
    x: state,
    y: stateCounts,
    text: state,
    type: "bar"
  };

  var data = [trace1];

  var layout = {
    title: 'Highest UFO Occurrences by State'
  };

  Plotly.newPlot('plot', data, layout);
}

// Dropdown Menu
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
    x = state.slice(0, 4);
    y = stateCounts.slice(0, 4);
  } else if (month === 'February') {
    x = state.slice(4, 8);
    y = stateCounts.slice(4, 8);
  } else if (month === 'March') {
    x = state.slice(8, 12);
    y = stateCounts.slice
  }
}