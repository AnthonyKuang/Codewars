function add(n) {
  var fn = function(x) {
    return add(n + x)
  };

  fn.valueOf = function() {
    return n;
  };

  return fn;
}

var a = add(1)(2);
console.log(a);
console.log(add(1) == 1);

// add(1)(2)
// add(1) must return a function, unless it is by itself, then it returns a value