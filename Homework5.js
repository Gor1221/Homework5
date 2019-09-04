let array = [];
let simpleNumber = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let specialNumber = ['', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tenNumbers = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let hundred = ['', 'hundred'];
let thousand = ['', 'thousand'];
let numberInWord = "";


function convertThreeDigitsToThousandWords(number) {
    let thousandPart = Math.floor(number / Math.pow(10, 3));
    let hundredPart = number - thousandPart * 1000;
    while (number) {
        lastDigit = number % 10;
        array.push(lastDigit);
        number = Math.floor((number - lastDigit) / 10);
    }
    array.reverse();
    numberInWord = (simpleNumber[array[0]] + " " + hundred[1] + " " + tenNumbers[array[1]] + " " + simpleNumber[array[2]]) + " " + thousand[1];
    return numberInWord;
}

function convertTwoDigitsToThousandWords(number) {
    let thousandPart = Math.floor(number / Math.pow(10, 3));
    let hundredPart = number - thousandPart * 1000;
    while (number) {
        lastDigit = number % 10;
        array.push(lastDigit);
        number = Math.floor((number - lastDigit) / 10);
    }
    array.reverse();
    numberInWord = (tenNumbers[array[0]] + " " + simpleNumber[array[1]]) + " " + thousand[1];
    return numberInWord;
}

function convertOneDigitsToThousandWords(number) {
    let thousandPart = Math.floor(number / Math.pow(10, 3));
    let hundredPart = number - thousandPart * 1000;
    numberInWord = (simpleNumber[thousandPart]) + " " + thousand[1];
    return numberInWord;
}

function convertThreeDigitsTohHundredWords(number) {
    let thousandPart = Math.floor(number / Math.pow(10, 3));
    let hundredPart = number - thousandPart * 1000;
    while (hundredPart) {
        lastDigit = hundredPart % 10;
        array.push(lastDigit);
        hundredPart = Math.floor((hundredPart - lastDigit) / 10);
    }
    array.reverse();
    numberInWord = (simpleNumber[array[0]] + " " + hundred[1] + " " + tenNumbers[array[1]] + " " + simpleNumber[array[2]]);
    return numberInWord;
}

function convertTwoDigitsTohHundredWords(number) {
    let thousandPart = Math.floor(number / Math.pow(10, 3));
    let hundredPart = number - thousandPart * 1000;
    while (hundredPart) {
        lastDigit = hundredPart % 10;
        array.push(lastDigit);
        hundredPart = Math.floor((hundredPart - lastDigit) / 10);
    }
    array.reverse();
    numberInWord = (tenNumbers[array[0]] + " " + simpleNumber[array[1]]);
    return numberInWord;
}

function convertOneDigitsToHundredWords(number) {
    let thousandPart = Math.floor(number / Math.pow(10, 3));
    let hundredPart = number - thousandPart * 1000;
    numberInWord = simpleNumber[hundredPart];
    return numberInWord;
}

function convertToFinalWord(number) {
    let thousandPart = Math.floor(number / Math.pow(10, 3));
    let hundredPart = number - thousandPart * 1000;
    let firstPart = "";
    let secondPart = "";
    let result;
    if (number < 10) {
        result = simpleNumber[number];
    } else if (number >= 10 && number <= 99) {
        result = convertTwoDigitsTohHundredWords(number);
    } else if (number > 99 && number <= 999) {
        result = convertThreeDigitsTohHundredWords(number);
    } else {
        if (thousandPart.toString().length === 3) {
            firstPart = convertThreeDigitsToThousandWords(number);

        } else if (thousandPart.toString().length === 2) {
            firstPart = convertTwoDigitsToThousandWords(number);

        } else if (thousandPart.toString().length === 1) {
            firstPart = convertOneDigitsToThousandWords(number);
        }
        if (hundredPart.toString().length === 3) {
            secondPart = convertThreeDigitsTohHundredWords(number);

        } else if (hundredPart.toString().length === 2) {
            secondPart = convertTwoDigitsTohHundredWords(number);

        } else if (hundredPart.toString().length === 1) {
            secondPart = convertOneDigitsToHundredWords(number);

        }
        result = firstPart + " " + secondPart;
    }
    return result;
}

console.log(convertToFinalWord(5));
console.log(convertToFinalWord(25));
console.log(convertToFinalWord(425));
console.log(convertToFinalWord(9425));
console.log(convertToFinalWord(79425));
console.log(convertToFinalWord(179425));