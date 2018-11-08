'use strict';

describe('thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('initial temperature is 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20)
  });

  it('raises temperature by increase()', function() {
    thermostat.increase();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('lowers temperature by decrease()', function() {
    thermostat.decrease();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

});