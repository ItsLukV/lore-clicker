class Lore {
  private data: LoreDataTypes[];
  x: number;
  y: number;
  // Denne function bliver kørt når man skaber en object med denne class
  constructor() {
    // Dette er alle de variabler, som bliver brugt til at selve loren
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
        succes:
          "How goes the slave business? Nice and cheap right? Well, champion, on you go to earn more crumbs!",
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
        succes:
          "Champion, why must you buy slaves! You're supposed to be our hero!",
        failed:
          "Great Hero! Today is a grand day for careful, cookie, crumb, collecting!",
        lore: { min: false, max: false },
      },
      {
        requirement: {
          krummer: {
            min: 10000,
            max: 15000,
          },
          mouse: 0,
          slave: 50,
          worker: 0,
          training: 0,
          wetstone: 0,
        },
        succes:
          "I beg of you! Stop this way of cruelty! Slaves are the tools of evil, not good!",
        failed:
          "The Sword was right in choosing you, even if you didn't choose it.",
        lore: { min: false, max: false },
      },
      {
        requirement: {
          krummer: {
            min: 50000,
            max: 60000,
          },
          mouse: 0,
          slave: 50,
          worker: 0,
          training: 0,
          wetstone: 0,
        },
        succes: "To think the Holy-Crumb Sword would ever choose you!",
        failed: "",
        lore: { min: false, max: false },
      },
      {
        requirement: {
          krummer: {
            min: 250000,
            max: 350000,
          },
          mouse: 0,
          slave: 100,
          worker: 0,
          training: 0,
          wetstone: 0,
        },
        succes:
          "To think we hoped you would save us from the rise of the dark lord… when in reality you are said dark lord!",
        failed: "Our Land truly will be saved by you!",
        lore: { min: false, max: false },
      },
      {
        requirement: {
          krummer: {
            min: 1000000,
            max: 1000000000000000,
          },
          mouse: 0,
          slave: 100,
          worker: 0,
          training: 0,
          wetstone: 0,
        },
        succes:
          "T-to think we would foster the growth of our own demise, Dark Lord! Enslaving out people like this… have you no shame! I would die than live as your slave, so farewell, Dark Lord… a hero will surely rise to be your demise! Ugh! *Dies*",
        failed:
          "A being of good from start to finish. Though it matters not, now you must continue to grow, for the Dark Lord is sure to rise! A being as glorious and virtuous as you will surely be his demise! Now I must venture out, after all of this, I do hope that I might call you… friend.",
        lore: { min: false, max: false },
      },
    ];
    this.x = 10;
    this.y = 150;
  }

  // Dette er en function, som bliver køre tick
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

      text(data.succes, this.x, this.y, 436 - 20, 450);
    } else {
      playerData.lore[this.checkIndex()].min = true;

      text(data.failed, this.x, this.y, 390 - 10, 450);
    }
    pop();
  }

  // Dette er en function, som returner index nummeret nuværende posistion i this.data
  public checkIndex(): number {
    for (let i = 0; i < playerData.lore.length; i++) {
      if (playerData.lore[i].max === false) {
        return i;
      }
    }
  }

  // Dette gemmer om man havde de krav for at se loren i playerdata
  private checkFail(stat: boolean) {
    if (stat) {
      playerData.lore[this.checkIndex()].status = 1;
    } else {
      playerData.lore[this.checkIndex()].status = 2;
    }
  }

  // Dette tjeker om man har items nok til at se "succes" lore
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

  // Dette skriver texten om, hvornår man kan se næste lore afsnit
  private showNextLore() {
    let data = this.data[this.checkIndex()].requirement.krummer.min;
    text(`Next lore at: ${data}`, 0, height - 50, 400, 50);
  }

  // Dette er funtion, som indholder mange forskillge diverse function
  private smallStuff() {
    textSize(30);
    textAlign(CENTER);
  }
}
