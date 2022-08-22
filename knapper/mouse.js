class MouseKnap extends Knap {
  constructor(x, y, width, height, img) {
    super(x, y, width, height, img);
  }
  clicked() {
    if (this.x < mouseX && this.x + this.width > mouseX) {
      if (this.y < mouseY && this.y + this.height > mouseY) {
        const playerMouse = playerData.shop.mouse;
        if (playerData.krummer >= playerMouse.cost) {
          playerData.krummer -= playerMouse.cost;
          playerMouse.antal++;
          playerMouse.bonus = playerMouse.antal;
        }
      }
    }
  }
}
