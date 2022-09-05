/// <reference path="knap.ts"/>

class SlaveKnap extends Knap {
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
    this.bonusEffekt = 2;
    this.Count = frameCount + frameRate();
  }

  // Detter er funktion som viser knap og dens pris og antal
  show() {
    push();
    textSize(32.5);
    image(this.img, this.x, this.y, this.width, this.height);
    let pData = playerData.shop.slave;
    text(pData.cost, this.x + 184, this.y + 20, 93, 30);
    text(pData.antal, this.x + 184, this.y + 66, 93, 30);
    pop();
  }

  // Dette er en function bliver køret når man trykker på spillet
  // I denne funtion bliver der tjekket om man trykker knappen
  clicked() {
    if (this.x < mouseX && this.x + this.width > mouseX) {
      if (this.y < mouseY && this.y + this.height > mouseY) {
        const PData = playerData.shop.slave;
        if (playerData.krummer >= PData.cost) {
          playerData.krummer -= PData.cost;
          PData.antal++;
          PData.bonus = PData.antal;
          PData.cost = Math.floor(PData.cost * 2);
        }
      }
    }
  }

  // Denne funtion, tilføjer krummer til krummesum automatisk
  autos() {
    if (this.Count <= frameCount) {
      playerData.krummer += playerData.shop.slave.bonus;
      this.Count = frameCount + frameRate() * this.bonusEffekt;
    }
  }
}
