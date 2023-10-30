// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class Spaceship {
    constructor(name, topspeed) {
        this.name = name;
        this.topspeed = topspeed;
    }

    accelerate() {
    const {name, topspeed} = this;
    console.log(`${name} is moving to ${topspeed}!`);
    }
}

const t65Xwing = new Spaceship('T65 X-Wing', "1050 KPH" );
const mellenniumFalcon = new Spaceship('The Millennium Falcon', '1050 KPH');
const t70Xwing = new Spaceship('T-70 X-Wing', '1100 KPH');
const imperialTieFighter = new Spaceship('Imperial TIE Fighter', "1200 KPH");
const tieStriker = new Spaceship('Tie Striker', '1500 KPH');

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

console.log(t65Xwing);
console.log(mellenniumFalcon);
console.log(t70Xwing);
console.log(imperialTieFighter);
console.log(tieStriker);

console.log(t65Xwing.accelerate());
console.log(mellenniumFalcon.accelerate());
console.log(t70Xwing.accelerate());
console.log(imperialTieFighter.accelerate());
console.log(tieStriker.accelerate());