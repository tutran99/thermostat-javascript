'use strict';

describe('thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('initial temperature is 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20)
  });
});