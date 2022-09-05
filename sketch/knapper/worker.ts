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

  clicked() {
    if (this.x < mouseX && this.x + this.width > mouseX) {
      if (this.y < mouseY && this.y + this.height > mouseY) {
        const PlayerWorker = playerData.shop.worker;
        if (playerData.krummer >= PlayerWorker.cost) {
          playerData.krummer -= PlayerWorker.cost;
          PlayerWorker.cost = Math.floor(PlayerWorker.cost * 1.2);
          PlayerWorker.antal++;
          PlayerWorker.bonus = PlayerWorker.antal;
        }
      }
    }
  }

  autos() {
    if (this.Count <= frameCount) {
      let pData = playerData.shop;
      playerData.krummer += pData.worker.bonus + pData.wetstone.bonus;
      this.Count = frameCount + frameRate() * this.bonusEffekt;
    }
  }
}
