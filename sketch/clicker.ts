class Clicker {
  img: p5.Image;
  x: number;
  y: number;
  d: number;
  oldD: number;
  r: number;
  rotateSpeed: number;
  frameCount: number;
  constructor(img: p5.Image, x: number, y: number) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.d = CLICKER_D;
    this.oldD = CLICKER_D;
    this.r = this.d / 2;
    this.rotateSpeed = 15;
    this.frameCount;
  }

  // Dette viser småkagen og den rotere den også
  show() {
    if (frameCount < this.frameCount) {
      this.d = this.oldD * 0.8;
    } else {
      this.d = this.oldD;
    }
    push();
    translate(this.x, this.y);
    angleMode(DEGREES);
    rotate(frameCount / this.rotateSpeed);
    imageMode(CENTER);
    image(img, 0, 0, this.d, this.d);
    pop();
  }

  // Dette er en function bliver køret når man trykker på spillet
  // I denne funtion bliver der tjekket om man trykker på småkagen
  // Hvis ja, så tilføjer den X krummer
  clicked(mouseX: number, mouseY: number) {
    let Dist = dist(mouseX, mouseY, this.x, this.y);
    if (Dist < this.oldD / 2) {
      this.frameCount = frameCount + frameRate() / 12;
      let num = Math.round(Math.random() * 1) + 0;
      playerData.krummer +=
        playerData.shop.mouse.bonus + 1 + num * playerData.shop.training.bonus;
    }
  }
}
