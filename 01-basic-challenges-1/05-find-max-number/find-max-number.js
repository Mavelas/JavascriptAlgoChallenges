function findMaxNumber(arrayOfNumbers) {
  let biggestNumber = arrayOfNumbers[0];

  for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > biggestNumber) biggestNumber = arrayOfNumbers[i]
  }
  return biggestNumber
}

module.exports = findMaxNumber;
