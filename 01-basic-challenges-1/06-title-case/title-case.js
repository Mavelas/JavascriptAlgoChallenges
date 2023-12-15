function titleCase(phrase) {
  const wordArray = phrase.toLowerCase().split(' ');
  for (let i = 0; i < wordArray.length; i++) {
    wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].slice(1);
  }
  return wordArray.join(' ');
}

module.exports = titleCase;
