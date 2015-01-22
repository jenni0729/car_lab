function Car(make, model, year, state, color, previous_owners, current_owner){
 this.make = make;
 this.model = model;
 this.year = year;
 this.color = color;
 this.previous_owners = [];
 this.current_owner = "Manufacturer";
 this.state = "off";
 this.passengers = [];
 
}


  Car.prototype.sale = function(newOwner){
  this.previous_owners.push(this.current_owner);
  this.current_owner = newOwner;
};


  Car.prototype.paint = function(newColor){
  this.color = newColor;
};








Car.prototype.start = function() {
  if (this.state === "off") {
      this.state = "on";
  }
};

Car.prototype.off = function() {
  if (this.state === "on") {
      this.state = "off" ;
  }
};

Car.prototype.DriveTo = function(destination) {
  if (this.state === "on") {
      console.log ("driving to " + destination);

  }
};

Car.prototype.park = function() {
  if (this.state === "off") {
     console.log ("parked!"); 
  }
};

Car.prototype.pick_up = function(name){
  if (this.state === "on") {
      this.passengers.push(name);
     console.log("I am driving to pick up " + name);
  }
};

Car.prototype.dropOff = function(name) {
  if(this.state === "on") {
    if(this.passengers.indexOf(name) !== -1) {
      console.log ("Driving to pick up " + name);
      this.passengers.pop(name);
    }
  }
};
//Car.prototype.dropOff = function(npm )


module.exports=Car;

/*Phase III



Implement the following methods:

Car#pick_up should take a name and console.log that you are "driving to 'pick up <friend>'", but only if the car is on. It should also update the passangers array to include the new passanger.
Car#dropOff it should take a name and remove them from the passengers array, but only if they are in the array. It should also only drop them off if the car is on. */