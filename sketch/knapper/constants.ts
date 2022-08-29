const CLICKER_D: number = 330;
const BTN_WIDTH: number = 200;
const BTN_HEIGHT: number = 100;

interface LoreDataTypes {
  [index: number]: {
    requirement: {
      krummer: {
        min: number;
        max: number;
      };
      mouse: number;
      slave: number;
      worker: number;
      training: number;
      wetstone: number;
    };
    succes: string;
    failed?: string;
  };
}

const loreData: LoreDataTypes = [
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
      "Salutations Hero and welcome to Confectopia! A land of Wizards, Warriors, Paladins as well as a whole lot of sweets!",
    failed: "",
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
