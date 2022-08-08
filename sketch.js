let clicks = 0;
let clicksShow;
let skive;
let shop;


function setup() {
    load();

    clicksShow = createP(clicks);
    clicksShow.parent(main);

    // position stuff
    clicksShow.style("position","absolute")
    clicksShow.style("left",`${50}%`)
    // clicksShow.style("top",`${50}%`)
    clicksShow.style("transform","translate(-50%,-50%)")
    clicksShow.html(`${playerData.clicks} clicks`)

    // Shop create
    shop = createA("shop.html","Shop")
    shop.parent(main)
    shop.addClass("shop")

    // Shop pos
    shop.style("position","absolute")
    shop.style("left",`${50}%`)
    shop.style("top",`${600}%`)

    // Shop looks
    shop.style("background-color","rgb(120,120,120)")
    shop.style("padding","10px 10px 10px 10px")
    shop.style("border-radius","2.5%")
    shop.style("border", "2px solid black")
    shop.style("transform","translate(-50%,-50%)")
    shop.style("text-decoration","none")
    shop.style("color","inherit")
    


    skive = new Skive();

}

let frames = 0;
function draw() {
    if(frames == 60) {
        playerData.clicks += playerData.shop.slave * 1
        playerData.clicks += playerData.shop.superSlave * 2
        frames = 0;    
    }
    frames++;

    clicksShow.html(`${playerData.clicks} clicks`)
}

class Skive {
    constructor() {
        this.width = 500;
        this.height = 500;
        this.skive = createDiv();
        this.skive.parent(main)

        // Looks Stuff
        this.skive.style("width",`${this.width}px`);
        this.skive.style("height",`${this.height}px`);

        // Class Stuff for css stuff
        this.skive.addClass("skive")
        this.skive.addClass("hover");

        // position stuff
        this.skive.style("position","absolute")
        this.skive.style("left",`${50}%`)
        this.skive.style("top",`${50}%`)
        this.skive.style("transform","translate(-50%)")



        // Clicking stuff
        this.skive.mousePressed(() => {
            playerData.clicks += playerData.shop.mouse;
            clicksShow.html(`${playerData.clicks} clicks`);
        })
    }
}




