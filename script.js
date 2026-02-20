function convertToRoman(num) {
  const romanSymbols = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';

  // Iterate through the symbols from largest to smallest
  for (const [symbol, value] of romanSymbols) {
    // While the current value fits into the remaining number
    while (num >= value) {
      result += symbol; // Add the symbol to our string
      num -= value;     // Subtract the value from our total
    }
  }

  return result;
}

// Examples:
console.log(convertToRoman(14));      // Output: XIV
console.log(convertToRoman(798));     // Output: DCCXCVIII
console.log(convertToRoman(3999));    // Output: MMMCMXCIX
