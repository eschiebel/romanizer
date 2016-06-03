
var romanizer = {
    // convert arabic in to roman out
    // arabic: number
    // returns: string: roman numeral
    ator: function(arabic) {
        var r;      // remainders
        var m, c, x, i;   // place values
        var roman = '';
        //console.log("arabic:", arabic);

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

        roman += genDigits(m, 'M');
        if(c >= 5) {
            roman += 'D';
            c -= 5;
        }
        roman += genDigits(c, 'C');

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
