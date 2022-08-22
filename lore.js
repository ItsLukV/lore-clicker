class Lore {
  constructor() {
    this.data = [
      {
        requirement: {
          krummer: 1,
          mouse: 0,
          slave: 0,
          worker: 0,
          training: 0,
          wetstone: 0,
        },
        succes:
          "Salutations Hero and welcome to Confectopia! A land of Wizards, Warriors, Paladins as well as a whole lot of sweet!",
        failed: "",
      },
      {
        requirement: {
          krummer: 20,
          mouse: 0,
          slave: 1,
          worker: 0,
          training: 0,
          wetstone: 0,
        },
        succes:
          "I see you've already bought yourself a slave! Hehe, the slave'll do all the work you want it to!",
        failed:
          "As you can see to the right, you can see that you can buy a whole bunch of different confections! Haha, get it? Confectopia? Anyways, go get yourself a worker and don't mind the uh… other option!",
      },
    ];
  }

  show() {
    if (this.#checkLore()) {
      text(lore.data[this.#checkIndex()].succes, 100, 100, 200, 500);
    }
  }

  #checkIndex() {
    for (let i = 0; i < playerData.lore.length; i++) {
      if (playerData.lore[i] === false) {
        return i;
      }
    }
  }

  #checkLore() {
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
    if (isBigger(this.data[this.#checkIndex()].requirement, currentData)) {
      return true;
    } else {
      return false;
    }

    function isBigger(obj1, obj2) {
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
  }
}
