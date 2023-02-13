// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  //opcion 1
  return Number(array1.join('')) + Number(array2.join(''))
  
  //opcion 2
  // let num1 = ''
  // let num2 = ''
  // for (let index = 0; index < array1.length; index++) {
  //   num1 += array1[index]
  // }
  // for (let index = 0; index < array2.length; index++) {
  //   num2 += array2[index]
  // }
  // return Number(num1) + Number(num2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return String(value) === [...String(value)].reverse().join('')
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return 'Required field'
  }
  return Number(input) ? '' : 'Must be a number besides 0'
}