module.exports = function toReadable(number) {
    const dictionaryOfNumbers = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let fullName = '';

    if (number === 0) {
        return 'zero';
    }

    if (Math.trunc(number / 100) !== 0) {
        fullName += `${dictionaryOfNumbers[Math.trunc(number / 100)]} hundred `;
    }
    
    if (number % 100 in dictionaryOfNumbers && number % 100 !== 0) {
        fullName += `${dictionaryOfNumbers[number % 100]}`;
    } else if (number % 100 !== 0) {
        fullName += `${dictionaryOfNumbers[number % 100 - number % 10]} ${dictionaryOfNumbers[number % 10]}`
    }

    return fullName.trim();

}
