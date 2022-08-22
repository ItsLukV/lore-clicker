let img;
let clicker;
let mouseKnap, slaveKnap, workerKnap, trainingKnap, wetstoneKnap;
const ClickerD = 330;
let SlaveCount;
let mouseShopImg, slaveShopImg, workerShopImg, trainingShopImg, wetstoneShopImg;
let lore;

function preload() {
  img = loadImage("assets/clicker.png");
  mouseShopImg = loadImage("assets/mouse.png");
  slaveShopImg = loadImage("assets/slave.png");
  workerShopImg = loadImage("assets/worker.png");
  trainingShopImg = loadImage("assets/training.png");
  wetstoneShopImg = loadImage("assets/wetstone.png");
}

function setup() {
  loadPlayerData();

  createCanvas(1450, 650);
  clicker = new Clicker(img, width / 2, height / 2);

  mouseKnap = new MouseKnap(width - 200, 0, 200, 100, mouseShopImg);
  slaveKnap = new SlaveKnap(width - 200, 100, 200, 100, slaveShopImg);
  workerKnap = new WorkerKnap(width - 200, 200, 200, 100, workerShopImg);
  trainingKnap = new TrainingKnap(width - 200, 300, 200, 100, trainingShopImg);
  wetstoneKnap = new WetstoneKnap(width - 200, 400, 200, 100, wetstoneShopImg);

  lore = new Lore();
}

function draw() {
  background(100);
  clicker.show();

  mouseKnap.show();

  slaveKnap.show();
  slaveKnap.autos();

  workerKnap.show();
  workerKnap.autos();

  trainingKnap.show();

  wetstoneKnap.show();

  lore.show();

  text(playerData.krummer, width / 2, 100);
}

function mouseClicked() {
  clicker.clicked(mouseX, mouseY);

  mouseKnap.clicked();

  slaveKnap.clicked();

  workerKnap.clicked();

  trainingKnap.clicked();

  wetstoneKnap.clicked();
}
