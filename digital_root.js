function digital_root(n) {
  let accumulation = n;
  while (accumulation > 9) {
    accumulation = accumulation.toString().split('').map(num => Number(num)).reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  return accumulation;
}

console.log(digital_root(456));