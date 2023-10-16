module.exports = function toReadable (number) {
  a = number.toString();
  b = a.length;
  hundreds = '';
  decades = '';
  ending = ''; 
  const numbers = ['','one','two','three','four','five','six','seven','eight','nine'];
  const decade = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
  const teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
  if (b === 3) {
    hundreds = `${numbers[Number(a[0])]} hundred`;
    decades = `${decade[Number(a[1])]}`;
    if (a[1] === '1') {
      ending = teens[Number(a[2])]
    }
    else {
      ending = numbers[Number(a[2])];
    }
    if (a[2] === '0' && a[1] != '1') {
      result = `${hundreds} ${decades}`
    }
    else {
        result = `${hundreds} ${decades} ${ending}`
    }
    if (a[1] === '0' && a[2] === '0') {
      result = hundreds;
    }
  } 
  if (b === 2) {
    decades = `${decade[Number(a[0])]}`;
    if (a[0] === '1') {
      result = teens[Number(a[1])]
    }
    else {
      ending = numbers[Number(a[1])];
      result = `${decades} ${ending}`
    }
    
    if (a[1] === '0' && a[0] != '1') {
      result = `${decades}`
    }
  }

  if (b === 1) {
    
    if (a[0] === '0') {
      result = 'zero'
    }
    else {
      result = numbers[Number(a[0])];
    }
  }
  result = result.replace(/\s+/g, ' ');
  return result;
}
