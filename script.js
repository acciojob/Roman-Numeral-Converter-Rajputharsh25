function toRoman(num) {

    const symbols = [
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

    for (let i = 0; i < symbols.length; i++) {
        while (num >= symbols[i][1]) {
            result += symbols[i][0];
            num -= symbols[i][1];
        }
    }

    return result;
}


// Examples
console.log(toRoman(14));  // XIV
console.log(toRoman(798)); // DCCXCVIII
