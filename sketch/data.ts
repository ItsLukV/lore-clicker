let playerData: playerData;

// Dette fortæller, hvilken type af variable playerData indeholder
interface playerData {
  class: {
    wizard: boolean;
    warrior: boolean;
    paladin: boolean;
  };
  krummer: number;
  shop: {
    mouse: {
      antal: number;
      cost: number;
      bonus: number;
    };
    slave: {
      antal: number;
      cost: number;
      bonus: number;
    };
    worker: {
      antal: number;
      cost: number;
      bonus: number;
    };
    training: {
      antal: number;
      cost: number;
      bonus: number;
    };
    wetstone: {
      antal: number;
      cost: number;
      bonus: number;
    };
  };
  lore: playerDataLore[];
}

/**
 * Dette bliver brugt i interface over.
 * @param status: 0 = false, 1 = succes, 2 = failed
 */
interface playerDataLore {
  min: boolean;
  max: boolean;
  status: number;
}

// Dette genstarter den data, som bliver gemt på browser
function restartData() {
  playerData = {
    class: {
      wizard: false,
      warrior: false,
      paladin: false,
    },
    krummer: 0,
    shop: {
      mouse: {
        antal: 0,
        cost: 5,
        bonus: 0,
      },
      slave: {
        antal: 0,
        cost: 10,
        bonus: 0,
      },
      worker: {
        antal: 0,
        cost: 100,
        bonus: 0,
      },
      training: {
        antal: 0,
        cost: 50,
        bonus: 0,
      },
      wetstone: {
        antal: 0,
        cost: 50,
        bonus: 0,
      },
    },
    lore: [
      {
        min: false,
        max: false,
        status: 0,
      },
      {
        min: false,
        max: false,
        status: 0,
      },
      {
        min: false,
        max: false,
        status: 0,
      },
      {
        min: false,
        max: false,
        status: 0,
      },
      {
        min: false,
        max: false,
        status: 0,
      },
      {
        min: false,
        max: false,
        status: 0,
      },
      {
        min: false,
        max: false,
        status: 0,
      },
      {
        min: false,
        max: false,
        status: 0,
      },
      {
        min: false,
        max: false,
        status: 0,
      },
      {
        min: false,
        max: false,
        status: 0,
      },
      {
        min: false,
        max: false,
        status: 0,
      },
      {
        min: false,
        max: false,
        status: 0,
      },
      {
        min: false,
        max: false,
        status: 0,
      },
    ],
  };

  console.log("data restarted");
}

// Denne funktion loade spilerens data
function loadPlayerData() {
  if (localStorage.getItem("playerData") === null) {
    restartData();
  } else {
    playerData = JSON.parse(localStorage.getItem("playerData"));
  }
}

// Dette en funktion bliver køre, lige før fanen/hjemmesiden bliver lukket.
// Den gemmer playerData(alt data om player) på browsen igennem localstorage
window.addEventListener("unload", function (event) {
  localStorage.setItem("playerData", JSON.stringify(playerData));
});
