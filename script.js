function convertToRoman(num) {
  if (num <= 0) return "";

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

  let result = "";

  for (let i = 0; i < romanSymbols.length; i++) {
    while (num >= romanSymbols[i][1]) {
      result += romanSymbols[i][0];
      num -= romanSymbols[i][1];
    }
  }

  return result;
}

function convertNumber() {
  const num = parseInt(document.getElementById("numberInput").value);
  
  if (isNaN(num) || num < 0 || num > 100000) {
    document.getElementById("result").innerText = "Please enter a number between 0 and 100000";
    return;
  }

  const roman = convertToRoman(num);
  document.getElementById("result").innerText = "Roman Numeral: " + roman;
}
