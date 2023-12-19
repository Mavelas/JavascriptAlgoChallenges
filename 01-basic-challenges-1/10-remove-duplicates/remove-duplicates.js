function removeDuplicates(arr) {
  const removedDupes = new Set([]);
  for (let index = 0; index < arr.length; index++) {
    removedDupes.add(arr[index]);
  }
  return [...removedDupes];
}

module.exports = removeDuplicates;
