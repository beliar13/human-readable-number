module.exports = function toReadable (number) {
  a = number.toString();
  b = a.length;
  hundreds = '';
  decades = '';
  ending = ''; 
  const numbers = ['','one','two','three','four','five','six','seven','eight','nine'];
  const decade = ['','','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety']
  const teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
  if (b === 3) {
    hundreds = `${numbers[Number(a[0])]} hundred `;
    decades = `${decade[Number(a[1])]} `;
    if (a[1] === '1') {
      ending = teens[Number(a[2])]
    }
    else {
      ending = numbers[Number(a[2])];
    }
  } 
  if (b === 2) {
    decades = `${decade[Number(a[0])]} `;
    if (a[0] === '1') {
      ending = teens[Number(a[1])]
    }
    else {
      ending = numbers[Number(a[1])];
    }
  }
  if (b === 1) {
    ending = numbers[Number(a[0])];
  }
  result = hundreds + decades +ending
  return result.replace(/\s+/g, ' ');;
}
