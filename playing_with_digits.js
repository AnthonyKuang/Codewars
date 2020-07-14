function digPow(n, p) {
  const n_array = n.toString().split('');
  let sum = 0;
  for (let i = 0; i < n_array.length; i++) {
    sum += n_array[i] ** p;
    p++;
  }
  return (sum % n === 0) ? (sum / n) : -1;
}

console.log(digPow(46288, 3));