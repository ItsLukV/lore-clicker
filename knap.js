class Knap {
  constructor(x, y, width, height, img) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.c = 255;
    this.execute = () => {
      console.log("Mouse is pressed");
    };
  }

  show() {
    image(this.img, this.x, this.y, this.width, this.height);
  }

  clicked(func) {
    if (this.x < mouseX && this.x + this.width > mouseX) {
      if (this.y < mouseY && this.y + this.height > mouseY) {
        this.execute = func;
        this.execute.call();
      }
    }
  }
}
