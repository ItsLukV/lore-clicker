let img: p5.Image;
let clicker: Clicker;
let mouseKnap: Knap;
let slaveKnap: Knap;
let workerKnap: Knap;
let trainingKnap: Knap;
let wetstoneKnap: Knap;
let mouseShopImg: p5.Image;
let slaveShopImg: p5.Image;
let workerShopImg: p5.Image;
let trainingShopImg: p5.Image;
let wetstoneShopImg: p5.Image;
let lore: Lore;
let backgroundIMG: p5.Image;

// Dette er function, bliver loadet ind før alt andet. Det er her,
// hvor de billeder, som bliver brugt bliver loadet ind
function preload() {
  img = loadImage("sketch/assets/clicker.png");
  mouseShopImg = loadImage("sketch/assets/mouseShop.png");
  slaveShopImg = loadImage("sketch/assets/SlaveShop.png");
  workerShopImg = loadImage("sketch/assets/WorkerShop.png");
  trainingShopImg = loadImage("sketch/assets/TrainingShop.png");
  wetstoneShopImg = loadImage("sketch/assets/WetstoneShop.png");
  backgroundIMG = loadImage("sketch/assets//background.png");
}

// Dette en function som bliver køre lige før game loopet bliver startet.
// Det her, hvor de forskillge knapper bliver skabt
// Og det også dataen bliver loadet ind
function setup() {
  loadPlayerData();

  createCanvas(1300, 650);
  clicker = new Clicker(img, width / 2 + 70, height / 2);

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

  lore = new Lore();
}

// Denne funktion bliver køre, hvert tick.
// Funktions opgave er at tegne eller opdatere de forskillge elementer
function draw() {
  background(100);
  image(backgroundIMG, 0, 0);

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
  let txt: string = `Krummer: ${playerData.krummer}`;
  rect(width / 2 - textWidth(txt) / 2 + 70, 50, textWidth(txt), 60);
  text(txt, width / 2 - textWidth(txt) / 2 + 70, 100);
  pop();
}

// Denne funktion bliver køret, hver gang mousen bliver trykket
function mouseClicked() {
  clicker.clicked(mouseX, mouseY);
  mouseKnap.clicked();
  slaveKnap.clicked();
  workerKnap.clicked();
  trainingKnap.clicked();
  wetstoneKnap.clicked();
}


// Dette er en dev funtion, Den restarter alt playerData, dette ment som hvis spillet sommer med at virke
function keyPressed(): void {
  if (keyCode === 220) {
    restartData();
  }
}
