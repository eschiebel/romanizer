
var romanizer = {
    hello: "hello",
    // convert arabic in to roman out
    // arabic: number
    // returns: string: roman numeral
    ator: function(arabic) {
        var d;      // digit for looping
        var r;      // remainders
        var m, c, x, i;   // place values
        var roman = '';
        //console.log("arabic:", arabic);

        m = Math.floor(arabic / 1000);
        if(m) {
            console.log("m", m);
            r = arabic % 1000;
            c = r / 100;
            roman += genDigits(m, 'M');
        }
        // else if(arabic === 500) {
        //     roman += 'D';
        // }
        // else if(arabic === 100) {
        //     roman += 'C';
        // }
        // else if(arabic === 50) {
        //     roman += 'L';
        // }
        // else if(arabic === 10) {
        //     roman += 'X';
        // }
        // x = Math.floor(arabic / 10);
        // if(x) {
        //     i = x % 10;
        // }
        // else if(i === 5) {
        //     roman += 'V';
        // }
        // else if(i === 4) {
        //     roman += 'IV';
        // }
        // else {
        //     for(d = 0; d < i; ++d) { // one I for each of the rest
        //         roman += 'I';
        //     }
        // }
        console.log('roman:', roman);
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
