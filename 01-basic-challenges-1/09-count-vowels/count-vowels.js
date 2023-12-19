function countVowels(str) {
  let counter = 0;
  const formattedString = str.toLowerCase();
  for (let i = 0; i < formattedString.length; i++) {
    if (formattedString[i] === 'a' || formattedString[i] === 'e' || formattedString[i] === 'i' || formattedString[i] === 'o' || formattedString[i] === 'u') {
      counter++;
    }
  }
  return counter;
}

module.exports = countVowels;
