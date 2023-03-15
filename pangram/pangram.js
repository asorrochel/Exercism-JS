export const isPangram = (sentence) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const sentenceLetters = sentence.toLowerCase().split('').filter((letter) => {
    return alphabet.indexOf(letter) !== -1;
  });
  const uniqueLetters = [...new Set(sentenceLetters)];
  return uniqueLetters.length === alphabet.length;
};
