function Plane() {
}

Plane.prototype.land = function (airport) {
  this.currentAirport = airport;
  this.inFlight = false;
};

Plane.prototype.takeOff = function () {
  this.inFlight = true;
  this.currentAirport = 'n/a';
};
