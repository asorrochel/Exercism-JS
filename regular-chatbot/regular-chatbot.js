// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  const regex = /^chatbot/i;
  return regex.test(command);
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  return message.replace(/emoji[\d]+/gi, '');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const REGEX = /\(\+\d{2}\) \d{3}-\d{3}-\d{3}/;
  const success = "Thanks! You can now download me to your phone."
  const fail = `Oops, it seems like I can't reach out to ${number}`;
  return REGEX.test(number) ? success : fail;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possib
 * fdassadfsale URL's that the user may have answered
 */
export function getURL(userInput) {
  const REGEX = /\w+\.\w+/g;
  return userInput.match(REGEX);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  const [lastName, firstName] = fullName.split(', ');
  return `Nice to meet you, ${capitalize(firstName)} ${capitalize(lastName)}`
}
