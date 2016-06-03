"use-strict";
var romanizer  = require('../src/romanizer.js');
var chai = require('chai');

var expect = chai.expect;
var should = chai.should();


describe('romanizer', () => {

    it('should return I given 1', function () {
        var r = romanizer.ator(1);
        expect(r).to.be.equal('I');
    });
})
