// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let numberCards = 0;
  stack.forEach((c) => {
    if (c === card) {
      numberCards++;
    }
  })

  return numberCards;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  const numberStack = stack.reduce((accumulator, currentLayer) => {
    if (type) {
      if (currentLayer % 2 === 0) {
        accumulator++;
      }
    } else {
      if (currentLayer % 2 !== 0) {
        accumulator++;
      } else {
        // If type is false, we need to increment the accumulator for even layers
        accumulator;
      }
    }
    return accumulator;
  }, 0);
  return numberStack;
}
