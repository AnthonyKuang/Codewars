// function printerError(s) {
//   return `${s.length - s.split('').filter(letter => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'].includes(letter)).length}/${s.length}`;
// }

function printerError(s) {
  return s.match(/[^a-m]/g).length + "/" + s.length;
}

console.log(printerError('aasdasfasfa'));