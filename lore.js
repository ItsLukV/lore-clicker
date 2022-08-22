class Lore {
  constructor() {
    this.data;
  }

  load() {
    this.data = loadJSON("data/lore.json");
    console.log(this.data);
  }

  show() {
    text(this.checkLore(), 100, 100, 100, 100);
  }

  checkLore() {
    return "hello";
  }
}
