const CLICKER_D: number = 330;
const BTN_WIDTH: number = 200;
const BTN_HEIGHT: number = 100;

interface LoreDataTypes {
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
}
