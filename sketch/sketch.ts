let img: p5.Image;
let clicker: Clicker;
let mouseKnap: Knap;
let slaveKnap: Knap;
let workerKnap: Knap;
let trainingKnap: Knap;
let wetstoneKnap: Knap;
const ClickerD = 330;
let SlaveCount;
let mouseShopImg: p5.Image;
let slaveShopImg: p5.Image;
let workerShopImg: p5.Image;
let trainingShopImg: p5.Image;
let wetstoneShopImg: p5.Image;
let lore: Lore;

function preload() {
  img = loadImage("sketch/assets/clicker.png");
  mouseShopImg = loadImage("sketch/assets/mouse.png");
  slaveShopImg = loadImage("sketch/assets/slave.png");
  workerShopImg = loadImage("sketch/assets/worker.png");
  trainingShopImg = loadImage("sketch/assets/training.png");
  wetstoneShopImg = loadImage("sketch/assets/wetstone.png");
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

  workerKnap.show();

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
