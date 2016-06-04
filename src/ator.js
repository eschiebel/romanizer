// convert arabic in to roman out
// good for 1 - 4999
// arabic: number
// returns: string: roman numeral
// throws: RangeError: if incoming arabic is out of bounds
function ator(arabic) {
    var r;      // remainders
    var m, c, x, i;   // place values
    var roman = '';
    //console.log("arabic:", arabic);

    if(arabic >= 4000) {
        throw new RangeError("Value must be < 4000");
    }
    if(arabic <= 0) {
        throw new RangeError("Value must be > 0");
    }

    // work out the digits
    r = arabic;
    m = Math.floor(arabic / 1000);
    if(m) {
        r = r % 1000;
    }
    c = Math.floor(r / 100);
    if(c) {
        r = r % 100;
    }
    x = Math.floor(r / 10);
    i = r % 10;
    //console.log(m, c, x, i);

    //convert digits to roman chars
    roman = placesToRoman(m, c, x, i);

    return roman;
}

function placesToRoman(m, c, x, i) {
    //console.log(m, c, x, i);

    // thousands
    var roman = genDigits(m, 'M');

    // hundreds
    if(c === 9) {                  // 9xx
        roman += 'CM';
        c = 0;
    }
    else if(c >= 5) {
        roman += 'D';
        c -= 5;
    }
    if(c === 4) {
        roman += 'CD';
        c = 0;
    }
    roman += genDigits(c, 'C');

    // tens
    if(x === 9) {           // 90+
        roman += 'XC';
        x = 0;
    }
    else if(x >= 5) {
        roman += 'L';
        x -= 5;
    }
    if(x === 4) {
        roman += 'XL';
        x = 0;
    }
    roman += genDigits(x, 'X');


    if(i === 9) {           // 9
        roman += 'IX'
        i -= 9;
    }
    else if(i >= 5) {       // 5+
        roman += 'V'
        i -= 5;
    }
    if(i === 4) {           // 4
        roman += 'IV';
        i = 0;
    }
    roman += genDigits(i, 'I');

    return roman;
}
function genDigits(n, c) {
    var str = '';
    for(var i = 0; i < n; ++i)
        str += c;
    return str;
}

module.exports = ator;
