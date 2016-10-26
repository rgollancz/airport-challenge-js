function Airport(capacity = 5) {
  this._hangar = []
  this.weather = new Weather
  this.CAPACITY = capacity
}

Airport.prototype.planes = function () {
  return this._hangar;
};

Airport.prototype.add_plane = function (plane) {
  if (this.weather.isStormy()) throw "It's too stormy for planes to land";
  if (this.isAtCapacity() === true) throw "Airport full";
  plane.land(this);
  this._hangar.push(plane);
};

Airport.prototype.release_plane = function (plane) {
  if (this.weather.isStormy() === true) throw "It's too stormy for planes to take off";
  plane.takeOff();
  this._hangar.pop(plane);
};

Airport.prototype.isAtCapacity = function () {
  return this.planes().length >= this.CAPACITY;
};
