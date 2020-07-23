function isPangram(string) {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  return alphabet.map(letter => string.split(' ').join('').toLowerCase().split('').includes(letter)).includes(false) ? false : true;
}

console.log(isPangram('This is not a panagram.'));