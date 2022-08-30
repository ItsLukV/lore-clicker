class Lore {
  private data: LoreDataTypes[];

  constructor() {
    this.data = [
      {
        requirement: {
          krummer: {
            min: 6,
            max: 10,
          },
          mouse: 1,
          slave: 0,
          worker: 0,
          training: 0,
          wetstone: 0,
        },
        succes:
          "Salutations Hero and welcome to Confectopia! A land of Wizards, Warriors, Paladins as well as a whole lot of sweets!",
        failed: "test",
      },
      {
        requirement: {
          krummer: {
            min: 20,
            max: 50,
          },
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

  public show(): void {
    if (this.checkLoreKrummer())
      if (this.checkLoreItems()) {
        playerData.lore[this.checkIndex()].min = true;

        text(this.data[this.checkIndex()].succes, 100, 100, 200, 500);
      } else {
        playerData.lore[this.checkIndex()].min = true;

        text(this.data[this.checkIndex()].failed, 100, 100, 200, 500);
      }
  }

  private checkIndex(): number {
    for (let i = 0; i < playerData.lore.length; i++) {
      if (playerData.lore[i].max === false) {
        return i;
      }
    }
  }

  private checkFail(stat: boolean) {
    if (stat) {
      playerData.lore[this.checkIndex()].failed = 1;
    } else {
      playerData.lore[this.checkIndex()].failed = 2;
    }
  }

  private checkLoreKrummer(): boolean {
    if (
      this.data[this.checkIndex()].requirement.krummer.min <=
        playerData.krummer ||
      playerData.lore[this.checkIndex()].min
    ) {
      return true;
    }
    return false;
  }
  private checkLoreItems() {
    let dataRec = this.data[this.checkIndex()].requirement;
    let PlayerShop = playerData.shop;
    let obj = {
      mouse: PlayerShop.mouse.antal >= dataRec.mouse,
      slave: PlayerShop.slave.antal >= dataRec.slave,
      worker: PlayerShop.worker.antal >= dataRec.worker,
      traning: PlayerShop.training.antal >= dataRec.training,
      wetstone: PlayerShop.training.antal >= dataRec.wetstone,
    };
    this.checkFail(
      obj.mouse && obj.slave && obj.worker && obj.traning && obj.wetstone
    );
    return obj.mouse && obj.slave && obj.worker && obj.traning && obj.wetstone;
  }
}
