// Dette er en class, bliver brugt som grundsten til at alle knapper
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

  // Dette viser knapen
  show() {
    image(this.img, this.x, this.y, this.width, this.height);
  }

  // Dette tjekker om der blivet trykket på knappen
  clicked() {
    if (this.x < mouseX && this.x + this.width > mouseX) {
      if (this.y < mouseY && this.y + this.height > mouseY) {
        console.log("hello");
      }
    }
  }

  // Dette er funktion, som nogen af dens "børn" bruger
  // Og derfor skal den være med her
  autos() {}
}
