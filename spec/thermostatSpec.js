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

  it('can turn off power saving mode', function() {
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can turn power saving mode back on', function() {
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.turnPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can reset to default temperature', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.increase();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('if power saving mode is switched on', function() {
    it('the maximum temperature is 25 degrees', function() {
      for(var i = 0; i < 6; i++) {
        thermostat.increase();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25)
    });
  });

  describe('if power saving mode is switched off', function() {
    it('the maximum temperature is 32 degrees', function() {
      thermostat.turnPowerSavingModeOff();
      for(var i = 0; i < 13; i++) {
        thermostat.increase();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe('energy usage', function() {
    describe('when temperature is less than 18 degrees', function() {
      it('is defined as low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.decrease();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });
  
    describe('when temperature is between 18 and 25 degrees', function() {
      it('is defined as medium-usage', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });
  
    describe('when temperature is anything else', function() {
      it('is defined as high-usage', function() {
        thermostat.powerSavingMode = false;
        for (var i = 0; i < 6; i++) {
          thermostat.increase();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });

});