abstract class Knap {
  img: p5.Image;
  x: number;
  y: number;
  width: number;
  height: number;
  c: number;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    img: p5.Image
  ) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.c = 255;
  }

  show() {
    image(this.img, this.x, this.y, this.width, this.height);
  }

  clicked() {
    if (this.x < mouseX && this.x + this.width > mouseX) {
      if (this.y < mouseY && this.y + this.height > mouseY) {
        console.log("hello");
      }
    }
  }

  autos() {}
}
