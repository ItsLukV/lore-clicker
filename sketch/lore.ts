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
      {
        requirement: {
          krummer: {
            min: 120,
            max: 125,
          },
          mouse: 0,
          slave: 1,
          worker: 0,
          training: 0,
          wetstone: 0,
        },
        succes:
          "You finally have enough money to buy a worker! M-maybe now you can uh… be the hero you're promised to be?",
        failed:
          "You finally have enough to buy a worker! You can now start a real business, Hero!\n+rep",
        lore: {
          min: false,
          max: false,
        },
      },
      {
        requirement: {
          krummer: {
            min: 200,
            max: 300,
          },
          mouse: 0,
          slave: 0,
          worker: 0,
          training: 0,
          wetstone: 0,
        },
        succes:
          "You're probably wondering why you've been tasked with acquiring all these crumbs? Well, this world wasn' t always as you see it now *wink*",
        failed: "",
        lore: { min: false, max: false },
      },
      {
        requirement: {
          krummer: {
            min: 500,
            max: 700,
          },
          mouse: 0,
          slave: 0,
          worker: 0,
          training: 0,
          wetstone: 0,
        },
        succes:
          "To aid you further in your quest, Hero. I have this limited time offer of a holy Crumb-Sword! It'll remain here for 1 minute and it'll only cost: 400 crumbs!",
        failed: "",
        lore: { min: false, max: false },
      },
      {
        requirement: {
          krummer: {
            min: 1000,
            max: 1250,
          },
          mouse: 0,
          slave: 0,
          worker: 0,
          training: 0,
          wetstone: 0,
        },
        succes:
          "A lot of thoughts are probably going through your head: Who'es talking to me, what kind of world is this? Why crumbs! Well, Hero, all shall be answered in time.",
        failed: "",
        lore: { min: false, max: false },
      },
      {
        requirement: {
          krummer: {
            min: 1500,
            max: 1750,
          },
          mouse: 0,
          slave: 1,
          worker: 0,
          training: 0,
          wetstone: 0,
        },
        /// TODO der mangler noget
        succes:
          "How goes the slave business? Nice and cheap right? Well, champion, on you go to earn more crumbs! \n -rep (Fade in new background?)",
        failed:
          "Greetings, Hero, A nice day right? A nice day to earn some more crumbs!",
        lore: { min: false, max: false },
      },
      {
        requirement: {
          krummer: {
            min: 2000,
            max: 2500,
          },
          mouse: 0,
          slave: 1,
          worker: 0,
          training: 0,
          wetstone: 0,
        },
        /// TODO der mangler noget
        succes:
          "How goes the slave business? Nice and cheap right? Well, champion, on you go to earn more crumbs! \n -rep (Fade in new background?)",
        failed:
          "Greetings, Hero, A nice day right? A nice day to earn some more crumbs!",
        lore: { min: false, max: false },
      },
    ];
    this.img = img;
  }

  public show(): void {
    push();
    this.smallStuff();

    if (
      playerData.krummer > this.data[this.checkIndex()].requirement.krummer.max
    ) {
      playerData.lore[this.checkIndex()].max = true;
    }

    this.showNextLore();
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
  private showNextLore() {
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
