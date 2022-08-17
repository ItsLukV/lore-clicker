class Clicker {
  constructor(img, x, y) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.d = ClickerD;
    this.oldD = ClickerD;
    this.r = this.d / 2;
    this.rotateSpeed = 15;
    this.frameCount;
  }

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

  clicked(mouseX, mouseY) {
    let Dist = dist(mouseX, mouseY, this.x, this.y);
    if (Dist < this.oldD / 2) {
      this.frameCount = frameCount + frameRate() / 6;
      playerData.clicks++;
    }
  }
}
