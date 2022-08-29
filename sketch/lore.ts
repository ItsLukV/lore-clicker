class Lore {
  private data: LoreDataTypes;
  constructor() {
    this.data = loreData;
  }

  public show(): void {
    if (this.checkLoreKrummer()) {
      text(this.data[this.checkIndex()].succes, 100, 100, 200, 500);
    } else {
      text(this.data[this.checkIndex()].failed, 100, 100, 200, 500);
    }
  }

  private checkIndex(): number {
    for (let i = 0; i < playerData.lore.length; i++) {
      if (playerData.lore[i] === false) {
        return i;
      }
    }
  }

  private checkLoreKrummer(): boolean {
    if (
      playerData.krummer >= this.data[this.checkIndex()].requirement.krummer.min
    ) {
      return true;
    } else {
      return false;
    }
  }
  private checkLoreItems() {}
}
