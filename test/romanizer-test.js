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
    it('should return V given 5', function () {
        var r = romanizer.ator(5);
        expect(r).to.be.equal('V');
    });
    it('should return X given 10', function () {
        var r = romanizer.ator(10);
        expect(r).to.be.equal('X');
    });
    it('should return L given 50', function () {
        var r = romanizer.ator(50);
        expect(r).to.be.equal('L');
    });
    it('should return C given 100', function () {
        var r = romanizer.ator(100);
        expect(r).to.be.equal('C');
    });
    it('should return D given 500', function () {
        var r = romanizer.ator(500);
        expect(r).to.be.equal('D');
    });
    it('should return M given 1000', function () {
        var r = romanizer.ator(1000);
        expect(r).to.be.equal('M');
    });
    it('should return III given 3', function() {
        var r = romanizer.ator(3);
        expect(r).to.be.equal('III');
    });
})
