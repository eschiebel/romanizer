"use-strict";
var romanizer  = require('../src/romanizer.js');
var chai = require('chai');

var expect = chai.expect;
var should = chai.should();


describe('roman to arabic', () => {

    // test thousands
    it('should return 1 given I', function () {
        var r = romanizer.rtoa('I');
        expect(r).to.be.equal(1);
    });
});
