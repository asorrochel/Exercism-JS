export const hey = (message) => {
  switch(true) {
    case isQuestion(message) && isShouting(message):
      return 'Calm down, I know what I\'m doing!';
      break;
    case isShouting(message):
      return 'Whoa, chill out!';
      break;
    case isSilence(message):
      return 'Fine. Be that way!';
    case isQuestion(message) && !isShouting(message):
      return 'Sure.';
      break;
    default:
      return 'Whatever.';
  }
};
function isUpperCase(str) {
  return str === str.toUpperCase();
}
function isQuestion(str) {
  return str.trim().endsWith('?');
}
function isShouting(str) {
  return str === str.toUpperCase() && /[a-zA-Z]/.test(str);
}
function isSilence(str) {
  return str.trim() === '';
}