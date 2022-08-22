let playerData = {
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
};

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
  };

  console.log("data restarted");
}

function loadPlayerData() {
  playerData = JSON.parse(localStorage.getItem("playerData"));
}

function save() {
  playerData.krummer = clicks;
}

window.addEventListener("unload", function (event) {
  save();
  localStorage.setItem("playerData", JSON.stringify(playerData));
});
