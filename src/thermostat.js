'use strict';

function Thermostat() {
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMI_PSM_OFF = 32;
  this.powerSavingMode = true;
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.increase = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.decrease = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMI_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.turnPowerSavingModeOff = function() {
 this.powerSavingMode = false;
}

Thermostat.prototype.turnPowerSavingModeOn = function() {
 this.powerSavingMode = true;
}