function reverseString(stringToReverse) {
  // let reversedString = '';
  // for (let index = (stringToReverse.length - 1); index >= 0; index--) {
  //   reversedString = reversedString + stringToReverse[index];
  // }
  // return reversedString;

  return stringToReverse.split('').reverse().join('');
}

module.exports = reverseString;
