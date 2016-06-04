// convert roman numerals into arabic number
// roman: string
// returns: number
// throws: SyntaxError if roman numeral is malformed
function rtoa(roman) {
    if(roman === 'I') {
        return 1;
    }
    else {
        throw SyntaxError("Invalid roman numerals:", roman);
    }
}

module.exports = rtoa;
