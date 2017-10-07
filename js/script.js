var apiKey = "QE8J7VpAtS0jGD6GJcPQglaLebNpXNCqX6hijaMX";
var startDate = "2017-10-04";
var endDate = "2017-10-05";
var url = "https://api.nasa.gov/neo/rest/v1/feed\?"
var neos = [];
var json, neoCount;

url += "start_date=" + startDate;
url += "&end_date=" + endDate;
url += "&api_key=" + apiKey;

var starArray = [];
var starCount = 500;

// stars
var Star = function(x, y, stroke) {
    this.x = x;
    this.y = y;
    this.stroke = stroke;

    this.drawStar = function() {
        var stroke;

        if (Math.random() > .98) {
            stroke = this.stroke + random(1.5);
        } else {
            stroke = this.stroke;
        }
        ellipse(this.x, this.y, stroke);
    }
}


function preload() {
  json = loadJSON(url);
}

function setup() {
  starArray = [];

  for (var i = 0; i < starCount; i++) {
      var x = random(window.innerWidth);
      var y = random(window.innerHeight);
      var stroke = random(1, 3);
      starArray.push(new Star(x, y, stroke));
  }

  for(var i in json.near_earth_objects) {
    for(var k in json.near_earth_objects[i]) {
      append(neos, json.near_earth_objects[i][k]);
    }
  }
  neoCount = neos.length;
  createCanvas(window.innerWidth, window.innerHeight);

  background(color(150));
  console.log(json);
  console.log(neos);

  noStroke()
}

function draw() {
  background(color(5, 0, 50, 50));

  fill('white')

  for (var i in starArray) {
      starArray[i].drawStar()
  }

  var time = millis()/2000;
  //background("white");

  translate(width/2, height/2);

  ellipse(0, 0, 60, 60);

  for(var i in neos) {
    ellipse(cos(time) * (neoCount * i), sin(time) * (neoCount * i), 50 * neos[i].estimated_diameter.miles.estimated_diameter_max,
      50 * neos[i].estimated_diameter.miles.estimated_diameter_min
    );
  }
}
