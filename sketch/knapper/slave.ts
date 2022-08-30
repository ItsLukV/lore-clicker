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

  clicked() {
    if (this.x < mouseX && this.x + this.width > mouseX) {
      if (this.y < mouseY && this.y + this.height > mouseY) {
        const PlayerSlave = playerData.shop.slave;
        if (playerData.krummer >= PlayerSlave.cost) {
          playerData.krummer -= PlayerSlave.cost;
          PlayerSlave.cost = Math.floor(PlayerSlave.cost * 1.2);
          PlayerSlave.antal++;
          PlayerSlave.bonus = PlayerSlave.antal;
        }
      }
    }
  }

  autos() {
    if (this.Count <= frameCount) {
      playerData.krummer += playerData.shop.slave.bonus;
      this.Count = frameCount + frameRate() * this.bonusEffekt;
    }
  }
}
