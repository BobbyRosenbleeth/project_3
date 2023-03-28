// get the data endpoints
const jan23 = "https://nuforc.org/webreports/ndxe202301.html"
const feb23 = "https://nuforc.org/webreports/ndxe202302.html"
const mar23 = "https://nuforc.org/webreports/ndxe202303.html"

//jsonify each page

const jan = d3.json(jan23);
console.log(jan);

