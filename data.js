let playerData = {
    class: {
        wizard: false,
        warrior: false,
        paladin: false
    },
    clicks: 0,
    shop: {
        mouse: 1,
        slave: 0,
        superSlave: 0 
    }
}

function load() {
    playerData = JSON.parse(localStorage.getItem("playerData"))
}

function save() {
    playerData.clicks = clicks;
}

window.addEventListener("unload", function(event) {
    save();
    localStorage.setItem("playerData",JSON.stringify(playerData))
});