class WetstoneKnap extends Knap {
  constructor(x, y, width, height, img) {
    super(x, y, width, height, img);
  }

  clicked() {
    if (this.x < mouseX && this.x + this.width > mouseX) {
      if (this.y < mouseY && this.y + this.height > mouseY) {
        const playerWetstone = playerData.shop.training;
        if (playerData.krummer >= playerWetstone.cost) {
          playerData.krummer -= playerWetstone.cost;
          playerWetstone.antal++;
          playerWetstone.bonus = playerWetstone.antal;
        }
      }
    }
  }
}
