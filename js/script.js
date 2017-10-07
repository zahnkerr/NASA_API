var apiKey = "QE8J7VpAtS0jGD6GJcPQglaLebNpXNCqX6hijaMX";
var startDate = "2017-10-04";
var endDate = "2017-10-05";
var url = "https://api.nasa.gov/neo/rest/v1/feed\?"
var neos = [];
var json, neoCount;

url += "start_date=" + startDate;
url += "&end_date=" + endDate;
url += "&api_key=" + apiKey;

console.log(url);

// $.getJSON({
//   url: url,
//   success: function(json) {
//     console.log(json);
//   }
// })

function preload() {
  json = loadJSON(url);
}

function setup() {
  for(var i in json.near_earth_objects) {
    for(var k in json.near_earth_objects[i]) {
      append(neos, json.near_earth_objects[i][k]);
    }
  }
  neoCount = neos.length;
  createCanvas(window.innerWidth, window.innerHeight);

  background(color(150));
}
