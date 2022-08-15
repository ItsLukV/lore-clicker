function preload() {
  img = loadImage("assets/clicker.png");
}
function setup() {
  load();
  createCanvas(400, 400);
}

function draw() {
  image(img, 0, 0);
}
