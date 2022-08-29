class Lore {
  private data: LoreDataTypes;
  constructor() {
    this.data = loreData;
  }

  public show() {
    if (this.checkLore()) {
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

  private checkLore(): boolean {
    const playerDataShop = playerData.shop;
    let currentData = {
      krummer: playerData.krummer,
      mouse: playerDataShop.mouse.antal,
      slave: playerDataShop.slave.antal,
      worker: playerDataShop.worker.antal,
      traning: playerDataShop.training.antal,
      wetstone: playerDataShop.wetstone.antal,
    };
    // check requirement
    // if (isBigger(this.data.(this.checkIndex())requirement, currentData)) {
    //   return true;
    // } else {
    //   return false;
    // }

    function isBigger(obj1: any, obj2: any) {
      if (obj1.krummer > obj2.krummer) {
        return false;
      } else if (obj1.mouse > obj2.mouse) {
        return false;
      } else if (obj1.slave > obj2.slave) {
        return false;
      } else if (obj1.worker > obj2.worker) {
        return false;
      } else if (obj1.traning > obj2.traning) {
        return false;
      } else if (obj1.wetstone > obj2.wetstone) {
        return false;
      } else {
        return true;
      }
    }
    return;
  }
}
