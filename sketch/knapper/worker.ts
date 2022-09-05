/// <reference path="knap.ts"/>

class WorkerKnap extends Knap {
  bonusEffekt: number;
  Count: number;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    img: p5.Image
  ) {
    super(x, y, width, height, img);
    this.bonusEffekt = 1;
    this.Count = frameCount + frameRate();
  }

  // Detter er funktion som viser knap og dens pris og antal
  show() {
    push();
    textSize(32.5);
    image(this.img, this.x, this.y, this.width, this.height);
    let pData = playerData.shop.worker;
    text(pData.cost, this.x + 184, this.y + 20, 93, 30);
    text(pData.antal, this.x + 184, this.y + 66, 93, 30);
    pop();
  }
  // Dette er en function bliver køret når man trykker på spillet
  // I denne funtion bliver der tjekket om man trykker knappen
  clicked() {
    if (this.x < mouseX && this.x + this.width > mouseX) {
      if (this.y < mouseY && this.y + this.height > mouseY) {
        const pData = playerData.shop.worker;
        if (playerData.krummer >= pData.cost) {
          playerData.krummer -= pData.cost;
          pData.antal++;
          pData.bonus = pData.antal;
          pData.cost = Math.floor(pData.cost * 2);
        }
      }
    }
  }

  // Denne funtion, tilføjer krummer til krummesum automatisk
  autos() {
    if (this.Count <= frameCount) {
      let pData = playerData.shop;
      playerData.krummer += pData.worker.bonus + pData.wetstone.bonus;
      this.Count = frameCount + frameRate() * this.bonusEffekt;
    }
  }
}
