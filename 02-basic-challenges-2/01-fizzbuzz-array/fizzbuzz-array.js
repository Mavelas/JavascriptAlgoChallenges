function fizzBuzzArray(num) {
  const fizzBuzzArray = [];
  for (let index = 1; index <= num; index++) {
    if (index % 3 === 0 && index % 5 === 0) fizzBuzzArray.push("FizzBuzz");
    else if (index % 3 === 0) fizzBuzzArray.push("Fizz");
    else if (index % 5 === 0) fizzBuzzArray.push("Buzz");
    else fizzBuzzArray.push(index);
  }
  return fizzBuzzArray;
}

module.exports = fizzBuzzArray;
