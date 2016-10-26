'use strict';

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it("shouldn't have any planes on creation", function() {
    expect(airport.planes()).toEqual([])
  });

  it("should store landed planes", function() {
    spyOn(airport.weather, 'isStormy').and.returnValue(false)
    airport.add_plane(plane)
    expect(airport.planes()).toEqual([plane])
  });

  it("should no longer store planes that have taken off", function() {
    spyOn(airport.weather, 'isStormy').and.returnValue(false)
    airport.add_plane(plane)
    airport.release_plane(plane)
    expect(airport.planes()).toEqual([])
  });

  it("shouldn't allow planes to land in a storm", function() {
    spyOn(airport.weather, 'isStormy').and.returnValue(true)
    expect(function() {airport.add_plane(plane)} ).toThrow("It's too stormy for planes to land")
  });

  it("shouldn't allow planes to take off in a storm", function() {
    spyOn(airport.weather, 'isStormy').and.returnValue(true)
    expect(function() {airport.release_plane(plane)} ).toThrow("It's too stormy for planes to take off")
  });

});
