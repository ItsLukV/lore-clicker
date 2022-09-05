// Dette bestemmer diameteren for småkage knappen
const CLICKER_D: number = 330;
// Dette bestemmer bredten for knappene
const BTN_WIDTH: number = 284;
// Dette bestemmer højden for knappene
const BTN_HEIGHT: number = 110;

// Dette bestemmer typen for loreData (this.data i lore.ts)
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
  failed: string;
  lore: LoreDataTypesLore;
}
// Dette bliver brugt til interface over
interface LoreDataTypesLore {
  min: boolean;
  max: boolean;
}
