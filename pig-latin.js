function pigIt(str) {
  return str.split(' ').map(word => (
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].includes(word[0].toLowerCase()) ? word.slice(1) + word[0] + 'ay' : word
  )).join(' ');
}

console.log(pigIt('Pig latin is cool'));