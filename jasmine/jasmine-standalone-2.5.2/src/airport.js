function Airport() {
  this._hangar = []
  this.weather = new Weather
}

Airport.prototype.planes = function () {
  return this._hangar;
};

Airport.prototype.add_plane = function (plane) {
  if (this.weather.isStormy() === true ) throw "It's too stormy for planes to land";
  plane.land(this);
  this._hangar.push(plane);
};

Airport.prototype.release_plane = function (plane) {
  if (this.weather.isStormy() === true) throw "It's too stormy for planes to take off";
  plane.takeOff();
  this._hangar.pop(plane);
};
