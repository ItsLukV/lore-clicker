class Lore {
  private img: p5.Image;
  private data: LoreDataTypes[];

  constructor(img: p5.Image) {
    this.data = [
      {
        requirement: {
          krummer: {
            min: 5,
            max: 10,
          },
          mouse: 0,
          slave: 0,
          worker: 0,
          training: 0,
          wetstone: 0,
        },
        succes:
          "Salutations Hero and welcome to Confectopia! \n A land of Wizards, Warriors, Paladins as well as a whole lot of sweets!",
        failed: "",
        lore: {
          min: false,
          max: false,
        },
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
        lore: {
          min: false,
          max: false,
        },
      },
    ];
    this.img = img;
  }

  public show(): void {
    push();
    this.smallStuff();

    this.nextLore();
    let data = this.data[this.checkIndex()];
    if (
      !(
        data.requirement.krummer.max >= playerData.krummer &&
        playerData.krummer >= data.requirement.krummer.min
      )
    ) {
      pop();
      return;
    }

    if (this.checkLoreItems()) {
      playerData.lore[this.checkIndex()].min = true;

      text(data.succes, 10, 110, 390 - 10, 450);
    } else {
      playerData.lore[this.checkIndex()].min = true;

      text(data.failed, 10, 110, 390 - 10, 450);
    }
    pop();
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
    console.log(this.checkIndex());
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

  // TODO: make it more correct
  private nextLore() {
    let data = this.data[this.checkIndex()].requirement.krummer.min;

    text(`Next lore at: ${data}`, 0, height - 50, 400, 50);
  }

  private smallStuff() {
    textSize(30);
    textAlign(CENTER);
    push();
    strokeWeight(20);
    line(400, 0, 400, height);
    pop();
    rect(0, 0, 400, height);
    image(this.img, 0, 0, 400, 100);
  }
}
