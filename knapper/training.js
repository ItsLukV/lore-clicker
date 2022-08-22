class TrainingKnap extends Knap {
  constructor(x, y, width, height, img) {
    super(x, y, width, height, img);
  }

  clicked() {
    if (this.x < mouseX && this.x + this.width > mouseX) {
      if (this.y < mouseY && this.y + this.height > mouseY) {
        const playerTrain = playerData.shop.training;
        if (playerData.krummer >= playerTrain.cost) {
          playerData.krummer -= playerTrain.cost;
          playerTrain.antal++;
          playerTrain.bonus = playerTrain.antal;
        }
      }
    }
  }
}
