'use strict';

describe('Plane', function() {
    var plane
    var airport

    beforeEach(function() {
      plane = new Plane();
      // airport = new Airport();
    });

  it("should not be 'in flight' after landing", function() {
    plane.land();
    plane.takeOff();
    expect(plane.inFlight).toEqual(true);
  });

  it("should be 'in flight' after landing", function() {
    plane.land();
    expect(plane.inFlight).toEqual(false);
  })

  it("should not have a 'current airport' after taking off", function() {
    plane.land();
    plane.takeOff();
    expect(plane.currentAirport).toEqual('n/a');
  })

});
