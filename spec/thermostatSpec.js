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

  it('has a minimum temperature of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.decrease();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has a power saving mode option, on by default', function() {
expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
});