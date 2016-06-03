
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
        roman += genDigits(m, 'M');
        if(c >= 5) {
            roman += 'D';
            c -= 5;
        }
        roman += genDigits(c, 'C');
        if(x >= 5) {
            roman += 'L';
            x -= 5;
        }
        roman += genDigits(x, 'X');
        if(i >= 5) {
            roman += 'V'
            i -= 5;
        }
        roman += genDigits(i, 'I');

        //console.log('roman:', roman);
        return roman;
    }
};

function genDigits(n, c) {
    var str = '';
    for(var i = 0; i < n; ++i)
        str += c;
    return str;
}
module.exports = romanizer;
