// function countOccurrences(inputString, charToSearch) {
//   let counter = 0;
//   for (let i = 0; i < inputString.length; i++) {
//     if (inputString.charAt(i) === charToSearch) {
//       counter++;
//     }
//   }
//   return counter;
// }

const countOccurrences = (inputString, charToSearch) => {
  return inputString.split(charToSearch).length - 1;
}

module.exports = countOccurrences;
