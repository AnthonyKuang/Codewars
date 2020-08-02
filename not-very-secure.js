function alphanumeric(string) {
  const length = string.length > 0;
  const characters = !string.split('').map(character => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('').includes(character)).includes(false);
  const whitespaceUnderscore = !string.split('').map(character => [' ', '_'].includes(character)).includes(true);
  return length && characters && whitespaceUnderscore;
}

console.log(alphanumeric(""));