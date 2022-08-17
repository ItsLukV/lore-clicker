let img;
let clicker;
let knap;
const ClickerD = 330;

function preload() {
  img = loadImage("assets/clicker.png");
}
function setup() {
  loadPlayerData();
  createCanvas(1450, 650);
  clicker = new Clicker(img, width / 2, height / 2);
  knap = new Knap(300, 100, 100, 100, "test");
}

function draw() {
  background(100);
  clicker.show();
  knap.show();

  text(playerData.clicks, width / 2, 100);
}

function mouseClicked() {
  clicker.clicked(mouseX, mouseY);
  knap.clicked(() => {
    console.log("test");
  });
}
