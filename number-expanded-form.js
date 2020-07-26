function expandedForm(num) {
  const numIndex = num.toString().split('').reverse();
  let array = [];
  numIndex.forEach((digit, index) => {
    let numberZero = '';
    for (i = index; i > 0; i--) {
      numberZero += '0';
    }
    array.push(digit + numberZero);
  })
  let answerString = '';
  array.reverse().forEach(num => {
    if (parseInt(num) !== 0) {
      answerString += `${num} + `;
    }
  })
  return answerString.slice(0, -3);
}

console.log(expandedForm(70304));