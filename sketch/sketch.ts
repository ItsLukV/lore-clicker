let img: p5.Image;
let clicker: Clicker;
let mouseKnap: Knap;
let slaveKnap: Knap;
let workerKnap: Knap;
let trainingKnap: Knap;
let wetstoneKnap: Knap;
let shopImg: p5.Image;
let mouseShopImg: p5.Image;
let slaveShopImg: p5.Image;
let workerShopImg: p5.Image;
let trainingShopImg: p5.Image;
let wetstoneShopImg: p5.Image;
let lore: Lore;
let loreImg: p5.Image;

function preload() {
  img = loadImage("sketch/assets/clicker.png");
  mouseShopImg = loadImage("sketch/assets/mouse.png");
  slaveShopImg = loadImage("sketch/assets/slave.png");
  workerShopImg = loadImage("sketch/assets/worker.png");
  trainingShopImg = loadImage("sketch/assets/training.png");
  wetstoneShopImg = loadImage("sketch/assets/wetstone.png");
  shopImg = loadImage("sketch/assets/Shop.png");
  loreImg = loadImage("sketch/assets/lore.png");
}

function setup() {
  loadPlayerData();

  createCanvas(1300, 650);
  clicker = new Clicker(img, width / 2, height / 2);

  mouseKnap = new MouseKnap(
    width - BTN_WIDTH,
    (height / 6) * 1,
    BTN_WIDTH,
    BTN_HEIGHT,
    mouseShopImg
  );
  slaveKnap = new SlaveKnap(
    width - BTN_WIDTH,
    (height / 6) * 2,
    BTN_WIDTH,
    BTN_HEIGHT,
    slaveShopImg
  );
  workerKnap = new WorkerKnap(
    width - BTN_WIDTH,
    (height / 6) * 3,
    BTN_WIDTH,
    BTN_HEIGHT,
    workerShopImg
  );
  trainingKnap = new TrainingKnap(
    width - BTN_WIDTH,
    (height / 6) * 4,
    BTN_WIDTH,
    BTN_HEIGHT,
    trainingShopImg
  );
  wetstoneKnap = new WetstoneKnap(
    width - BTN_WIDTH,
    (height / 6) * 5,
    BTN_WIDTH,
    BTN_HEIGHT,
    wetstoneShopImg
  );

  lore = new Lore(loreImg);
}

function draw() {
  background(100);

  image(shopImg, width - BTN_WIDTH, 0, 200, 100);

  slaveKnap.autos();
  workerKnap.autos();
  trainingKnap.autos();

  clicker.show();

  mouseKnap.show();

  slaveKnap.show();

  workerKnap.show();

  trainingKnap.show();

  wetstoneKnap.show();

  lore.show();

  push();
  textSize(50);
  let txt: string = `krummer: ${playerData.krummer}`;
  text(txt, width / 2 - textWidth(txt) / 2, 100);
  pop();
}

function mouseClicked() {
  clicker.clicked(mouseX, mouseY);
  mouseKnap.clicked();
  slaveKnap.clicked();
  workerKnap.clicked();
  trainingKnap.clicked();
  wetstoneKnap.clicked();
}

function keyPressed(): void {
  if (keyCode === 32) {
    restartData();
  }
}
