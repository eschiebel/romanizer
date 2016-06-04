var doator = require('./ator');
var dortoa = require('./rtoa');
var romanizer = {

    ator: function(a) {
        return doator(a);
    },
    rtoa: function(r) {
        return dortoa(r);
    }
}
module.exports = romanizer;
