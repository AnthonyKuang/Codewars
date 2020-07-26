// function expandedForm(num) {
//   const numIndex = num.toString().split('').reverse();
//   let array = [];
//   numIndex.forEach((digit, index) => {
//     let numberZero = '';
//     for (i = index; i > 0; i--) {
//       numberZero += '0';
//     }
//     array.push(digit + numberZero);
//   })
//   let answerString = '';
//   array.reverse().forEach(num => {
//     if (parseInt(num) !== 0) {
//       answerString += `${num} + `;
//     }
//   })
//   return answerString.slice(0, -3);
// }

function expandedForm(num) {
  return String(num)
        .split("")
        .reverse()
        .map((digit, index) => digit * Math.pow(10, index))
        .filter(a => a > 0)
        .reverse()
        .join(" + ");
}

console.log(expandedForm(70304));