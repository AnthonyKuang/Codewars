function toCamelCase(str) {
  if (str) {
    const underscore = str.split('_').length > 1 ? str.split('_') : null;
    const dash = str.split('-').length > 1 ? str.split('-') : null;
    const returnedValue = underscore ? underscore : dash;
    return returnedValue.map((word, index) => {
      return (index > 0) ? word.charAt(0).toUpperCase() + word.slice(1) : word;
    }).join('');
  } else {
    return '';
  }
}

console.log(toCamelCase(''));