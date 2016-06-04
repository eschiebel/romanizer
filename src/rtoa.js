// convert roman numerals into arabic number
// roman: string
// returns: number
// throws:
//      SyntaxError if roman numeral is malformed
//      InternalError if somehting went wrong
function rtoa(roman) {
    var reason = isValid(roman);
    if(reason) {
        throw SyntaxError(reason, roman);
    }
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
        else throw InternalError("Invalid character not caught in validation:", r[i]);
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

function isValid(roman) {
    var reason = "";

    // only valid roman characters?
    if(/[^MDCLXVI]/.test(roman))
        reason = "Invalid character";

    // M C X I can be repeated at most 3 times in a row
    if(/M{4}|C{4}|X{4}|I{4}/.test(roman))
        reason = "M, C, X, or I repeated more than 3 times";

    // D L V can never be repeated
    if(/D{2}|L{2}|V{2}/.test(roman))
        reason = "D, L, and V can never be repeated";

    // the I X and C can only be subtracted from the next 2 heigher values
    if(/X[DM]|I[LCDM]/.test(roman))
        reason = "I, X, and C can only be subtracted from next 2 heigher values";

    // only 1 subtraction per numeral
    if(/C{2}[DM]|X{2}[LC]|I{2}[VX]/.test(roman))
        reason = "Only 1 subtraction per numeral"

    // V L and D can never be subtracted
    if(/D[^CLXVI]|L[^XVI]|V[^I]/.test(roman))
        reason = "V, L, and D can not be repeated";

    return reason;
}

module.exports = rtoa;
