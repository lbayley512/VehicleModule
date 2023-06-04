//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
}
//this shows how to call from this module...



//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...


scheduleService(mileage){
    if (this.mileage > 30000) {            
        this.scheduleService = true;
        return this.scheduleService;                       
    };
};
 start(){
    if (this.fuel > 0) {
        console.log("engine has started.");
        return this.started = true;
    } else {
        console.log("no fuel.");
        return this.started = false;
    }
 }

 loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
        if((num + this.passenger) < this.maxPassengers) {
            this.passenger = num;
            return this.passenger;
        } 
        else{
            console.log(this.model + " " + this.make + " not have enough space.");
        }
    }
    else {
        console.log(this.model + " " + this.make + " is full.");
    }
 }










//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:

let myCar1 = new Car('mercury', 'coupe', '2013', 'white', 50000)

myCar1.start()
myCar1.loadPassenger(5)
myCar1.stop()
myCar1.checkService()

console.log(myCar1);

let myCar2 = new Car('audi', 'sedan', '1999', 'white', 40000)

myCar2.start()
myCar2.loadPassenger(5)
myCar2.stop()
myCar2.checkService()

console.log(myCar2);