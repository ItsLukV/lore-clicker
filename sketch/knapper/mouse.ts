/// <reference path="knap.ts"/>

class MouseKnap extends Knap {
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
