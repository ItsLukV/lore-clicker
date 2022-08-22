let img;
let clicker;
let mouseKnap, slaveKnap, workerKnap;
const ClickerD = 330;
let SlaveCount;
let mouseShopImg, slaveShopImg, workerShopImg;

function preload() {
  img = loadImage("assets/clicker.png");
  mouseShopImg = loadImage("assets/test.png");
  slaveShopImg = loadImage("assets/test.png");
  workerShopImg = loadImage("assets/test.png");
}

function setup() {
  loadPlayerData();
  createCanvas(1450, 650);
  clicker = new Clicker(img, width / 2, height / 2);

  mouseKnap = new Knap(width - 200, 0, 200, 100, slaveShopImg);
  slaveKnap = new Knap(width - 200, 100, 200, 100, slaveShopImg);
  workerKnap = new Knap(width - 200, 200, 200, 100, slaveShopImg);

  SlaveCount = frameCount + frameRate();
}

function draw() {
  background(100);
  clicker.show();

  mouseKnap.show();
  mouseKnap.hover();

  slaveKnap.show();
  slaveKnap.hover();

  workerKnap.show();
  workerKnap.hover();
  autos();

  text(playerData.krummer, width / 2, 100);
}

function mouseClicked() {
  clicker.clicked(mouseX, mouseY);
  slaveKnap.clicked(() => {
    let PlayerSlave = playerData.shop.slave;
    if (playerData.krummer >= playerData.shop.slave.cost) {
      playerData.krummer -= PlayerSlave.cost;
      PlayerSlave.antal++;
      PlayerSlave.bonus = PlayerSlave.antal;
    }
  });
}

function autos() {
  if (SlaveCount <= frameCount) {
    playerData.krummer += playerData.shop.slave.bonus;
    SlaveCount = frameCount + frameRate() * 2;
    console.log("salve");
  }
}
