var Clicker = (function () {
    function Clicker(img, x, y) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.d = CLICKER_D;
        this.oldD = CLICKER_D;
        this.r = this.d / 2;
        this.rotateSpeed = 15;
        this.frameCount;
    }
    Clicker.prototype.show = function () {
        if (frameCount < this.frameCount) {
            this.d = this.oldD * 0.8;
        }
        else {
            this.d = this.oldD;
        }
        push();
        translate(this.x, this.y);
        angleMode(DEGREES);
        rotate(frameCount / this.rotateSpeed);
        imageMode(CENTER);
        image(img, 0, 0, this.d, this.d);
        pop();
    };
    Clicker.prototype.clicked = function (mouseX, mouseY) {
        var Dist = dist(mouseX, mouseY, this.x, this.y);
        if (Dist < this.oldD / 2) {
            this.frameCount = frameCount + frameRate() / 12;
            playerData.krummer += playerData.shop.mouse.bonus + 1;
        }
    };
    return Clicker;
}());
var playerData;
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
        lore: [false, false, false],
    };
    console.log("data restarted");
}
function loadPlayerData() {
    if (localStorage.getItem("playerData") !== "null") {
        playerData = JSON.parse(localStorage.getItem("playerData"));
    }
    else {
        restartData();
    }
}
window.addEventListener("unload", function (event) {
    save();
    localStorage.setItem("playerData", JSON.stringify(playerData));
});
var Lore = (function () {
    function Lore() {
        this.data = [
            {
                requirement: {
                    krummer: 1,
                    mouse: 0,
                    slave: 0,
                    worker: 0,
                    training: 0,
                    wetstone: 0,
                },
                succes: "Salutations Hero and welcome to Confectopia! A land of Wizards, Warriors, Paladins as well as a whole lot of sweet!",
                failed: "",
            },
            {
                requirement: {
                    krummer: 20,
                    mouse: 0,
                    slave: 1,
                    worker: 0,
                    training: 0,
                    wetstone: 0,
                },
                succes: "I see you've already bought yourself a slave! Hehe, the slave'll do all the work you want it to!",
                failed: "As you can see to the right, you can see that you can buy a whole bunch of different confections! Haha, get it? Confectopia? Anyways, go get yourself a worker and don't mind the uh… other option!",
            },
        ];
    }
    Lore.prototype.show = function () {
        if (this.checkLore()) {
            text(lore.data[this.checkIndex()].succes, 100, 100, 200, 500);
        }
    };
    Lore.prototype.checkIndex = function () {
        for (var i = 0; i < playerData.lore.length; i++) {
            if (playerData.lore[i] === false) {
                return i;
            }
        }
    };
    Lore.prototype.checkLore = function () {
        var playerDataShop = playerData.shop;
        var currentData = {
            krummer: playerData.krummer,
            mouse: playerDataShop.mouse.antal,
            slave: playerDataShop.slave.antal,
            worker: playerDataShop.worker.antal,
            traning: playerDataShop.training.antal,
            wetstone: playerDataShop.wetstone.antal,
        };
        if (isBigger(this.data[this.checkIndex()].requirement, currentData)) {
            return true;
        }
        else {
            return false;
        }
        function isBigger(obj1, obj2) {
            if (obj1.krummer > obj2.krummer) {
                return false;
            }
            else if (obj1.mouse > obj2.mouse) {
                return false;
            }
            else if (obj1.slave > obj2.slave) {
                return false;
            }
            else if (obj1.worker > obj2.worker) {
                return false;
            }
            else if (obj1.traning > obj2.traning) {
                return false;
            }
            else if (obj1.wetstone > obj2.wetstone) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    return Lore;
}());
var img;
var clicker;
var mouseKnap;
var slaveKnap;
var workerKnap;
var trainingKnap;
var wetstoneKnap;
var SlaveCount;
var shopImg;
var mouseShopImg;
var slaveShopImg;
var workerShopImg;
var trainingShopImg;
var wetstoneShopImg;
var lore;
function preload() {
    img = loadImage("sketch/assets/clicker.png");
    mouseShopImg = loadImage("sketch/assets/mouse.png");
    slaveShopImg = loadImage("sketch/assets/slave.png");
    workerShopImg = loadImage("sketch/assets/worker.png");
    trainingShopImg = loadImage("sketch/assets/training.png");
    wetstoneShopImg = loadImage("sketch/assets/wetstone.png");
    shopImg = loadImage("sketch/assets/Shop.png");
}
function setup() {
    loadPlayerData();
    createCanvas(1450, 650);
    clicker = new Clicker(img, width / 2, height / 2);
    mouseKnap = new MouseKnap(width - BTN_WIDTH, (height / 6) * 1, BTN_WIDTH, BTN_HEIGHT, mouseShopImg);
    slaveKnap = new SlaveKnap(width - BTN_WIDTH, (height / 6) * 2, BTN_WIDTH, BTN_HEIGHT, slaveShopImg);
    workerKnap = new WorkerKnap(width - BTN_WIDTH, (height / 6) * 3, BTN_WIDTH, BTN_HEIGHT, workerShopImg);
    trainingKnap = new TrainingKnap(width - BTN_WIDTH, (height / 6) * 4, BTN_WIDTH, BTN_HEIGHT, trainingShopImg);
    wetstoneKnap = new WetstoneKnap(width - BTN_WIDTH, (height / 6) * 5, BTN_WIDTH, BTN_HEIGHT, wetstoneShopImg);
    lore = new Lore();
}
function draw() {
    background(100);
    image(shopImg, width - BTN_WIDTH, 0, 200, 100);
    clicker.show();
    mouseKnap.show();
    slaveKnap.show();
    workerKnap.show();
    trainingKnap.show();
    wetstoneKnap.show();
    lore.show();
    text(playerData.krummer, width / 2, 100);
}
function mouseClicked() {
    clicker.clicked(mouseX, mouseY);
    mouseKnap.clicked();
    slaveKnap.clicked();
    workerKnap.clicked();
    trainingKnap.clicked();
    wetstoneKnap.clicked();
}
var CLICKER_D = 330;
var BTN_WIDTH = 200;
var BTN_HEIGHT = 100;
var Knap = (function () {
    function Knap(x, y, width, height, img) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.c = 255;
    }
    Knap.prototype.show = function () {
        image(this.img, this.x, this.y, this.width, this.height);
    };
    Knap.prototype.clicked = function () {
        if (this.x < mouseX && this.x + this.width > mouseX) {
            if (this.y < mouseY && this.y + this.height > mouseY) {
                console.log("hello");
            }
        }
    };
    return Knap;
}());
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MouseKnap = (function (_super) {
    __extends(MouseKnap, _super);
    function MouseKnap(x, y, width, height, img) {
        return _super.call(this, x, y, width, height, img) || this;
    }
    MouseKnap.prototype.clicked = function () {
        if (this.x < mouseX && this.x + this.width > mouseX) {
            if (this.y < mouseY && this.y + this.height > mouseY) {
                var playerMouse = playerData.shop.mouse;
                if (playerData.krummer >= playerMouse.cost) {
                    playerData.krummer -= playerMouse.cost;
                    playerMouse.antal++;
                    playerMouse.bonus = playerMouse.antal;
                }
            }
        }
    };
    return MouseKnap;
}(Knap));
var SlaveKnap = (function (_super) {
    __extends(SlaveKnap, _super);
    function SlaveKnap(x, y, width, height, img) {
        var _this = _super.call(this, x, y, width, height, img) || this;
        _this.bonusEffekt = 2;
        _this.Count = frameCount + frameRate();
        return _this;
    }
    SlaveKnap.prototype.clicked = function () {
        if (this.x < mouseX && this.x + this.width > mouseX) {
            if (this.y < mouseY && this.y + this.height > mouseY) {
                var PlayerSlave = playerData.shop.slave;
                if (playerData.krummer >= PlayerSlave.cost) {
                    playerData.krummer -= PlayerSlave.cost;
                    PlayerSlave.cost = Math.floor(PlayerSlave.cost * 1.2);
                    PlayerSlave.antal++;
                    PlayerSlave.bonus = PlayerSlave.antal;
                }
            }
        }
    };
    SlaveKnap.prototype.autos = function () {
        if (this.Count <= frameCount) {
            playerData.krummer += playerData.shop.slave.bonus;
            this.Count = frameCount + frameRate() * this.bonusEffekt;
        }
    };
    return SlaveKnap;
}(Knap));
var TrainingKnap = (function (_super) {
    __extends(TrainingKnap, _super);
    function TrainingKnap(x, y, width, height, img) {
        return _super.call(this, x, y, width, height, img) || this;
    }
    TrainingKnap.prototype.clicked = function () {
        if (this.x < mouseX && this.x + this.width > mouseX) {
            if (this.y < mouseY && this.y + this.height > mouseY) {
                var playerTrain = playerData.shop.training;
                if (playerData.krummer >= playerTrain.cost) {
                    playerData.krummer -= playerTrain.cost;
                    playerTrain.antal++;
                    playerTrain.bonus = playerTrain.antal;
                }
            }
        }
    };
    return TrainingKnap;
}(Knap));
var WetstoneKnap = (function (_super) {
    __extends(WetstoneKnap, _super);
    function WetstoneKnap(x, y, width, height, img) {
        return _super.call(this, x, y, width, height, img) || this;
    }
    WetstoneKnap.prototype.clicked = function () {
        if (this.x < mouseX && this.x + this.width > mouseX) {
            if (this.y < mouseY && this.y + this.height > mouseY) {
                var playerWetstone = playerData.shop.training;
                if (playerData.krummer >= playerWetstone.cost) {
                    playerData.krummer -= playerWetstone.cost;
                    playerWetstone.antal++;
                    playerWetstone.bonus = playerWetstone.antal;
                }
            }
        }
    };
    return WetstoneKnap;
}(Knap));
var WorkerKnap = (function (_super) {
    __extends(WorkerKnap, _super);
    function WorkerKnap(x, y, width, height, img) {
        var _this = _super.call(this, x, y, width, height, img) || this;
        _this.bonusEffekt = 1;
        _this.Count = frameCount + frameRate();
        return _this;
    }
    WorkerKnap.prototype.clicked = function () {
        if (this.x < mouseX && this.x + this.width > mouseX) {
            if (this.y < mouseY && this.y + this.height > mouseY) {
                var PlayerWorker = playerData.shop.worker;
                if (playerData.krummer >= PlayerWorker.cost) {
                    playerData.krummer -= PlayerWorker.cost;
                    PlayerWorker.cost = Math.floor(PlayerWorker.cost * 1.2);
                    PlayerWorker.antal++;
                    PlayerWorker.bonus = PlayerWorker.antal;
                }
            }
        }
    };
    WorkerKnap.prototype.autos = function () {
        if (this.Count <= frameCount) {
            playerData.krummer += playerData.shop.worker.bonus;
            this.Count = frameCount + frameRate() * this.bonusEffekt;
        }
    };
    return WorkerKnap;
}(Knap));
//# sourceMappingURL=build.js.map