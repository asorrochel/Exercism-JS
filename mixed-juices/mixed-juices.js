// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
    case 'Pure Strawberry Joy':
      return 0.5
      break
    case 'Energizer':
      return 1.5
      break
    case 'Green Garden':
      return 1.5
      break
    case 'Tropical Island':
      return 3
      break
    case 'All or Nothing':
      return 5
      break
    default:
      return 2.5
      break
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let countLimes = 0
  
  if(wedgesNeeded === 0){
    return 0
  } else {
    for (let index = limes.length; index >= 0; index--) {
      if(index >= 0 && wedgesNeeded >= 0){
        switch(limes[index]){
          case 'small':
            wedgesNeeded -= 6
            countLimes++
            break
          case 'medium':
            wedgesNeeded -= 8
            countLimes++
            break
          case 'large':
            wedgesNeeded -= 10
            countLimes++
            break
        }
      } 
    }
    return countLimes
  }
}
  

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
}
