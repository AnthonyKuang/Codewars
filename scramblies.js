function scramble(str1, str2) {
  const indexMatched = str2.split('').map(letter => str1.split('').indexOf(letter));
  
  // str1 cannot be rearranged to match str2; there are letters in str2 that don't exist in str1
  if (indexMatched.indexOf(-1) > -1) {
    return false;
  }

  // str1 can be rearranged to match str2, although there may be duplicate letters in str2 that str1 doesn't have enough of
  return true;
}

console.log(scramble('aa', 'aa'));