let playerData: playerData;

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
 * @param failed: 0 = false, 1 = succes, 2 = failed
 */
interface playerDataLore {
  min: boolean;
  max: boolean;
  failed: number;
}

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
        failed: 0,
      },
      {
        min: false,
        max: false,
        failed: 0,
      },
      {
        min: false,
        max: false,
        failed: 0,
      },
      {
        min: false,
        max: false,
        failed: 0,
      },
      {
        min: false,
        max: false,
        failed: 0,
      },
      {
        min: false,
        max: false,
        failed: 0,
      },
      {
        min: false,
        max: false,
        failed: 0,
      },
      {
        min: false,
        max: false,
        failed: 0,
      },
      {
        min: false,
        max: false,
        failed: 0,
      },
      {
        min: false,
        max: false,
        failed: 0,
      },
    ],
  };

  console.log("data restarted");
}

function loadPlayerData() {
  if (localStorage.getItem("playerData") !== "null") {
    playerData = JSON.parse(localStorage.getItem("playerData"));
  } else {
    restartData();
  }
}

// function save() {
//   playerData.krummer = clicks;
// }

window.addEventListener("unload", function (event) {
  save();
  localStorage.setItem("playerData", JSON.stringify(playerData));
});
