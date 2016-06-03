"use-strict";
var romanizer  = require('../src/romanizer.js');
var chai = require('chai');

var expect = chai.expect;
var should = chai.should();


describe('romanizer', () => {

    // test thousands
    it('should return M given 1000', function () {
        var r = romanizer.ator(1000);
        expect(r).to.be.equal('M');
    });
    it('should return MM given 2000', function () {
        var r = romanizer.ator(2000);
        expect(r).to.be.equal('MM');
    });
    // throw in some hundreds
    it('should return MD given ', function () {
        var r = romanizer.ator(1500);
        expect(r).to.be.equal('MD');
    });
    it('should return MCC given 1200', function () {
        var r = romanizer.ator(1200);
        expect(r).to.be.equal('MCC');
    });
    it('should return D given 500', function () {
        var r = romanizer.ator(500);
        expect(r).to.be.equal('D');
    });
    it('should return CC given 200', function () {
        var r = romanizer.ator(200);
        expect(r).to.be.equal('CC');
    });
    it('should return DC given 600', function () {
        var r = romanizer.ator(600);
        expect(r).to.be.equal('DC');
    });
    // tens
    it('should return X given 10', function () {
        var r = romanizer.ator(10);
        expect(r).to.be.equal('X');
    });
    it('should return XX given 20', function () {
        var r = romanizer.ator(10);
        expect(r).to.be.equal('X');
    });
    it('should return L given 50', function () {
        var r = romanizer.ator(50);
        expect(r).to.be.equal('L');
    });
    it('should return MCX given 1110', function () {
        var r = romanizer.ator(10);
        expect(r).to.be.equal('X');
    });
    // ones
    it('should return I given 1', function () {
        var r = romanizer.ator(1);
        expect(r).to.be.equal('I');
    });
    it('should return V given 5', function () {
        var r = romanizer.ator(5);
        expect(r).to.be.equal('V');
    });
    it('should return III given 3', function() {
        var r = romanizer.ator(3);
        expect(r).to.be.equal('III');
    });
    if('should return VI given 6', function() {
        var r = romanizer.ator(6);
        expect(r).to.be.equal('VI');
    });
})
