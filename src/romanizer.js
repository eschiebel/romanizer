
var romanizer = {
    hello: "hello",
    // convert arabic in to roman out
    // arabic: number
    // returns: string: roman numeral
    ator: function(arabic) {
        var d;
        var roman = '';

        if(arabic === 1000) {
            roman += 'M'
        }
        else if(arabic === 500) {
            roman += 'D';
        }
        else if(arabic === 100) {
            roman += 'C';
        }
        else if(arabic === 50) {
            roman += 'L';
        }
        else if(arabic === 10) {
            roman += 'X';
        }
        else if(arabic === 5) {
            roman += 'V';
        }
        else if(arabic === 4) {
            roman += 'IV';
        }
        else {
            for(d = 0; d < arabic; ++d) { // one I for each of the rest
                roman += 'I';
            }
        }

        return roman;
    }
};
module.exports = romanizer;
