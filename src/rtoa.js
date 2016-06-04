// convert roman numerals into arabic number
// roman: string
// returns: number
// throws: SyntaxError if roman numeral is malformed
function rtoa(roman) {
    var r = simplify(roman);
    var a = 0;
    for(var i = 0; i < r.length; ++i) {
        if(r[i] === 'M') a += 1000;
        else if(r[i] === 'D') a += 500
        else if(r[i] === 'C') a += 100;
        else if(r[i] === 'L') a += 50;
        else if(r[i] === 'X') a += 10;
        else if(r[i] === 'V') a += 5;
        else if(r[i] === 'I') a += 1;
        else throw SyntaxError("Invalid roman numerals:", roman);
    }
    return a;
}

function simplify(roman) {
    // replace subtractions with simple enumerated version
    roman = roman.replace('CM', 'CCCCCCCCC');
    roman = roman.replace('CD', 'CCCC');
    roman = roman.replace('XC', 'XXXXXXXXX');
    roman = roman.replace('XL', 'XXXX');
    roman = roman.replace('IX', 'IIIIIIIII');
    roman = roman.replace('IV', 'IIII');
    return roman;
}

module.exports = rtoa;
