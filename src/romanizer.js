
var romanizer = {
    hello: "hello",
    // convert arabic in to roman out
    // arabic: number
    // returns: string: roman numeral
    ator: function(arabic) {
        if(1 === arabic) {
            return 'I';
        }
        else if(5 === arabic) {
            return 'V';
        }
        else if(10 === arabic) {
            return 'X';
        }
        else if(50 === arabic) {
            return 'L';
        }
        else if(100 === arabic) {
            return 'C';
        }
        else if(500 === arabic) {
            return 'D';
        }
        else if(1000 === arabic) {
            return 'M';
        }
        return undefined;
    }
};
module.exports = romanizer;
