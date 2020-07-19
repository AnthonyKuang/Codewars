function firstNonRepeatingLetter(s) {
  const occurrences = {};

  s.toLowerCase().split('').forEach(element => {
    occurrences[element] = occurrences[element] ? occurrences[element] + 1 : 1;
  })

  const onlyOnce = Object.keys(occurrences).filter(occurred => occurrences[occurred] === 1)[0];

  return (!onlyOnce) ? '' : s[s.toLowerCase().indexOf(onlyOnce)];
}

console.log(firstNonRepeatingLetter('OWooo'));