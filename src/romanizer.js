
var romanizer = {
    // convert arabic in to roman out
    // good for 0 - 4999
    // arabic: number
    // returns: string: roman numeral
    // throws:
    //
    ator: function(arabic) {
        var r;      // remainders
        var m, c, x, i;   // place values
        var roman = '';
        //console.log("arabic:", arabic);

        if(arabic > 4999) {
            throw new RangeError("Value must be < 5000");
        }
        if(arabic < 0) {
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
};
function placesToRoman(m, c, x, i) {
    console.log(m, c, x, i);
    var roman = '';

    // thousands
    if(c === 9 && x === 9 && i === 9) { // 999
        roman += 'IM';
        c = x = i = 0;
    }
    else if(c === 9 && x === 9) {       // 99x
        roman += 'XM';
        c = x = 0;
    }
    else if(c === 9) {                  // 9xx
        roman += 'CM';
        c = 0;
    }
    roman += genDigits(m, 'M');

    // hundreds
    if(x === 9 && i === 9) {    // x99
        roman += 'IC';
        x = i = 0;
    }
    if(c === 4 && x === 9) {    // 490
        roman += 'XD';
        c = x = 0;
    }
    if(x === 9) {               // 9xx
        roman += 'XC';
        x = 0;
    }
    if(c === 4) {               // 4xx
        roman += 'CD';
        c = 0;
    }
    if(c >= 5) {                // 5xx
        roman += 'D';
        c -= 5;
    }
    roman += genDigits(c, 'C');

    // tens
    if(x === 9) {           // 90+
        roman += 'L';
        x -= 5;
    }
    if(x === 4 && i === 9) {   // 49
        roman += 'IL';
        x = i = 0;
    }
    if(x === 4) {
        roman += 'XL';
        x = 0;
    }
    if(x >= 5) {                // 50+
        roman += 'L';
        x -= 5;
    }
    else {
        roman += genDigits(x, 'X');
    }

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
    }
    else {
        roman += genDigits(i, 'I');
    }

    return roman;
}
function genDigits(n, c) {
    var str = '';
    for(var i = 0; i < n; ++i)
        str += c;
    return str;
}
module.exports = romanizer;
