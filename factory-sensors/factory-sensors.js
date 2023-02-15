// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if(humidityPercentage < 70){
    return undefined;
  } else {
    throw new Error('The humidity level is too high');
  }
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  if(temperature === null){
    throw new ArgumentError('The temperature is null');
  } else if(temperature > 500){
    throw new OverheatingError(temperature);
  }
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
  try{
    if(actions.check()){
      return undefined;
    }
  } catch(error){
    if(error instanceof ArgumentError){
      actions.alertDeadSensor();
    }else if(error instanceof OverheatingError){
      if(error.temperature < 600){
        actions.alertOverheating();
      } else if(error.temperature >= 600){
        actions.shutdown();
      }
    } else {
      throw error;
    }
  }
}
