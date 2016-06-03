
var romanizer = {
    hello: "hello",
    // convert arabic in to roman out
    // arabic: number
    // returns: string: roman numeral
    ator: function(arabic) {
        var roman = '';
        if(arabic < 4) {
            for(var d = 0; d < arabic; ++d) {
                roman += 'I';
            }
        }
        else if(1 === arabic) {
            roman = 'I';
        }
        else if(5 === arabic) {
            roman = 'V';
        }
        else if(10 === arabic) {
            roman = 'X';
        }
        else if(50 === arabic) {
            roman = 'L';
        }
        else if(100 === arabic) {
            roman = 'C';
        }
        else if(500 === arabic) {
            roman = 'D';
        }
        else if(1000 === arabic) {
            return 'M';
        }
        return roman;
    }
};
module.exports = romanizer;
