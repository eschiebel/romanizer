var romanizer = require('./romanizer');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt("Enter a value: ");
rl.prompt();

rl.on('line', (value) => {
    var value2;
    value = value.trim();

    // empty line -> exit
    if(value === '')
        process.exit(0);

    try {
        var num = new Number(value);
        if(!isNaN(num)) {
            value2 = romanizer.ator(num.valueOf());
        }
        else {
            value2 = romanizer.rtoa(value);
            value2 = new Number(value2).toString();
        }
    }
    catch(ex) {
        value2 = "Invalid input: " + ex.message;
    }
    console.log(value2);
    rl.prompt();
});
