function arrayIntersection(arr1, arr2) {
  const uniques = new Set([...arr1]);
  const uniqueArr = [];
  for (i = 0; i < arr2.length; i++) {
    if (uniques.has(arr2[i])) uniqueArr.push(arr2[i]);
  }
  return uniqueArr;
}

module.exports = arrayIntersection;
