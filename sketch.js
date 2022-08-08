let clicks = 0;
let clicksShow;
let skive;

function setup() {
    if(localStorage.getItem("clicks") !== null) {
        clicks = Number(localStorage.getItem("clicks"));
    }
    clicksShow = createP(clicks);
    clicksShow.parent(main);

    // position stuff
    clicksShow.style("position","absolute")
    clicksShow.style("left",`${50}%`)
    // clicksShow.style("top",`${50}%`)
    clicksShow.style("transform","translate(-50%,-50%)")

    skive = new Skive();

}


function draw() {
    clicksShow.html(`${clicks} clicks`)
}

class Skive {
    constructor() {
        this.width = 100;
        this.height = 100;
        this.skive = createDiv();
        this.skive.parent(main)

        // Looks Stuff
        this.skive.style("width",`${this.width}px`);
        this.skive.style("height",`${this.height}px`);
        this.skive.style("background-color", "BLACK");
        this.skive.style("border-radius","50%")

        // position stuff
        this.skive.style("position","absolute")
        this.skive.style("left",`${50}%`)
        this.skive.style("top",`${50}%`)
        this.skive.style("transform","translate(-50%,-25%)")

        this.skive.mousePressed(() => {
            clicks += 1;
            localStorage.setItem("clicks",clicks)
        })
    }
}