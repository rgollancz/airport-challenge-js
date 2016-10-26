'use strict';

describe('Weather:', function() {
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  it("isStormy should return true when Math random is greater than 0.8", function() {
    spyOn(Math, 'random').and.returnValue(0.9)
    expect(weather.isStormy()).toEqual(true)
  });

});
