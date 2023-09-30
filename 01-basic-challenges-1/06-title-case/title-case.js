function titleCase(phrase) {
  phrase.split('');
  console.log(phrase)
  for (let i = 0; i < phrase.length; i++) {
    phrase[i].toLowerCase();
    console.log(phrase)
    const letters = phrase.split('')
    console.log(letters)
    phrase[i] = letters[0].toUpperCase();
    console.log(phrase)
  }
  return phrase
}

module.exports = titleCase;
