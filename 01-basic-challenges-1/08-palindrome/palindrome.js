function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedString = formattedStr.split('').reverse().join('');
  return reversedString === formattedStr;
}

module.exports = isPalindrome;
