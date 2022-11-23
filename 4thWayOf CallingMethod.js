//Function meant to be called in Constructor mode
function Bicycle(cadence,speed,gear,tirePressure){
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTirePressure = function(){
        this.tirePressure = this.tirePressure + 3;
    }
}

var bicycle1 = new Bicycle(50,20,40,10);
bicycle1.inflateTirePressure();
console.log(bicycle1);

var bicycle2 = new Bicycle(1,20,40,3);
bicycle2.inflateTirePressure();
console.log(bicycle2);


function Mechanic(name)
{
    this.name = name;
}

var mike = new Mechanic("Mike");
mike.inflateTirePressure = bicycle2.inflateTirePressure;
mike.inflateTirePressure.call(bicycle2);
console.log(bicycle2);



