var apiKey = "QE8J7VpAtS0jGD6GJcPQglaLebNpXNCqX6hijaMX";
var startDate = "2017-10-04";
var endDate = "2017-10-05";
var url = "https://api.nasa.gov/neo/rest/v1/feed\?"

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
  $.getJSON({
    url: url,
    success: function(json) {
      console.log(json);
    }
  })
}

function setup() {
  createCanvas(100, 100);
  background(color(150));
}
