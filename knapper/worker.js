class WorkerKnap extends Knap {
  constructor(x, y, width, height, img) {
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
      playerData.krummer += playerData.shop.worker.bonus;
      this.Count = frameCount + frameRate() * this.bonusEffekt;
    }
  }
}
