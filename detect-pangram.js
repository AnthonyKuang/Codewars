// .every returns a boolean if every value satisfies the given condition

function isPangram(string) {
  // const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  // return alphabet.map(letter => string.split(' ').join('').toLowerCase().split('').includes(letter)).includes(false) ? false : true;

  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(letter => string.toLowerCase().indexOf(letter) !== -1);
}

console.log(isPangram('A quick brown fox jumps over the lazy dog'));