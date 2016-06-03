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
    it('should return VI given 6', function() {
        var r = romanizer.ator(6);
        expect(r).to.be.equal('VI');
    });
    // subtractive cases
    //  minus 1
    it('should return IV given 4', function() {
        var r = romanizer.ator(4);
        expect(r).to.be.equal('IV');
    });
    it('should return IX given 9', function() {
        var r = romanizer.ator(9);
        expect(r).to.be.equal('IX');
    });
    it('should return IL given 49', function() {
        var r = romanizer.ator(49);
        expect(r).to.be.equal('IL');
    });
    it('should return IC given 99', function() {
        var r = romanizer.ator(99);
        expect(r).to.be.equal('IC');
    });
    it('should return IM given 999', function() {
        var r = romanizer.ator(999);
        expect(r).to.be.equal('IM');
    });
    // minus 10
    it('should return XM given 990', function() {
        var r = romanizer.ator(990);
        expect(r).to.be.equal('XM');
    });
    it('should return XD given 490', function() {
        var r = romanizer.ator(490);
        expect(r).to.be.equal('XD');
    });
    it('should return XC given 90', function() {
        var r = romanizer.ator(90);
        expect(r).to.be.equal('XC');
    });
    it('should return XL given 40', function() {
        var r = romanizer.ator(40);
        expect(r).to.be.equal('XL');
    });

    // minus 100
    it('should return CD given 400', function() {
        var r = romanizer.ator(400);
        expect(r).to.be.equal('CD');
    });
    it('should return CM given 900', function() {
        var r = romanizer.ator(900);
        expect(r).to.be.equal('CM');
    });
    it('should return CMM given 1900', function() {
        var r = romanizer.ator(1900);
        expect(r).to.be.equal('CMM');
    });
})
