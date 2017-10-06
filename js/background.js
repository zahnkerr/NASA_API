var starArray = [];
var starCount = 500;

var Star = function(x, y, stroke) {
  this.x = x;
  this.y = y;
  this.stroke = stroke;

  this.drawStar = function() {
    let stroke;
    if(Math.random() > .98) {
      stroke = this.stroke + random(1.5);
    } else {
      stroke = this.stroke;
    }
    ellipse(this.x, this.y, stroke);
  }
}

function preload() {

  console.log(starArray);
}

function setup() {
  starArray = [];

  for(let i = 0; i < starCount; i++) {
    let x = random(window.innerWidth);
    let y = random(window.innerHeight);
    let stroke = random(1,3);
    starArray.push(new Star(x, y, stroke));
  }

  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  noStroke();
  fill('white')
}

function draw() {
  background(color(5,0,50,255));
  for(var i in starArray) {
      starArray[i].drawStar()
  }
}

window.onresize = function() {
  setup()
}
