function moveZeros(arr) {
  return arr.filter(item => item !== 0).concat(arr.filter(item => item === 0));
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));