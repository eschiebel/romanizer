"use-strict";
var romanizer  = require('../src/romanizer.js');
var chai = require('chai');

var expect = chai.expect;
var should = chai.should();


describe('roman to arabic', function() {

    // test thousands
    it('should return 1000 giiven M', function () {
        var r = romanizer.rtoa('M');
        expect(r).to.be.equal(1000);
    });
    it('should return 2000 given MM ', function () {
        var r = romanizer.rtoa('MM');
        expect(r).to.be.equal(2000);
    });
    // throw in some hundreds
    it('should return 200 given CC', function () {
        var r = romanizer.rtoa('CC');
        expect(r).to.be.equal(200);
    });
    it('should return 500 given D', function () {
        var r = romanizer.rtoa('D');
        expect(r).to.be.equal(500);
    });
    it('should return 600 given DC', function () {
        var r = romanizer.rtoa('DC');
        expect(r).to.be.equal(600);
    });
    it('should return 1200 given MCC ', function () {
        var r = romanizer.rtoa('MCC');
        expect(r).to.be.equal(1200);
    });
    it('should return 1500 given MD', function () {
        var r = romanizer.rtoa('MD');
        expect(r).to.be.equal(1500);
    });
    // tens
    it('should return 10 given X', function () {
        var r = romanizer.rtoa('X');
        expect(r).to.be.equal(10);
    });
    it('should return 20 given XX', function () {
        var r = romanizer.rtoa('X');
        expect(r).to.be.equal(10);
    });
    it('should return 50 given L', function () {
        var r = romanizer.rtoa('L');
        expect(r).to.be.equal(50);
    });
    it('should return 60 given LX', function () {
        var r = romanizer.rtoa('LX');
        expect(r).to.be.equal(60);
    });
    it('should return 1110 given MCX', function () {
        var r = romanizer.rtoa('X');
        expect(r).to.be.equal(10);
    });
    // ones
    it('should return 1 given I', function () {
        var r = romanizer.rtoa('I');
        expect(r).to.be.equal(1);
    });
    it('should return 5 given V', function () {
        var r = romanizer.rtoa('V');
        expect(r).to.be.equal(5);
    });
    it('should return 3 given III', function() {
        var r = romanizer.rtoa('III');
        expect(r).to.be.equal(3);
    });
    it('should return 7 given VII', function() {
        var r = romanizer.rtoa('VII');
        expect(r).to.be.equal(7);
    });
    // subtractive cases
    //  minus 1
    it('should return 4 given IV', function() {
        var r = romanizer.rtoa('IV');
        expect(r).to.be.equal(4);
    });
    it('should return 9 given IX', function() {
        var r = romanizer.rtoa('IX');
        expect(r).to.be.equal(9);
    });
    it('should return 49 given XLIX', function() {
        var r = romanizer.rtoa('XLIX');
        expect(r).to.be.equal(49);
    });
    it('should return 99 given XCIX', function() {
        var r = romanizer.rtoa('XCIX');
        expect(r).to.be.equal(99);
    });
    it('should return 999 given CMXCIX', function() {
        var r = romanizer.rtoa('CMXCIX');
        expect(r).to.be.equal(999);
    });
    // minus 10
    it('should return 990 given CMXC', function() {
        var r = romanizer.rtoa('CMXC');
        expect(r).to.be.equal(990);
    });
    it('should return 490 given CDXC', function() {
        var r = romanizer.rtoa('CDXC');
        expect(r).to.be.equal(490);
    });
    it('should return 90 given XC', function() {
        var r = romanizer.rtoa('XC');
        expect(r).to.be.equal(90);
    });
    it('should return 40 given XL', function() {
        var r = romanizer.rtoa('XL');
        expect(r).to.be.equal(40);
    });

    // minus 100
    it('should return 400 given CD given 400', function() {
        var r = romanizer.rtoa('CD');
        expect(r).to.be.equal(400);
    });
    it('should return 900 given CM', function() {
        var r = romanizer.rtoa('CM');
        expect(r).to.be.equal(900);
    });
    it('should return MCM given 1900', function() {
        var r = romanizer.rtoa('MCM');
        expect(r).to.be.equal(1900);
    });
    it('should return MMMCM given 3900', function() {
        var r = romanizer.rtoa('MMMCM');
        expect(r).to.be.equal(3900);
    });

    // bad roman numerals
    it('should throw syntax error given Q', function() {
        function bad() {romanizer.rtoa('Q');}
        expect(bad).to.throw(SyntaxError);
    });
    it('should throw syntax error given MMMM', function() {
        function bad() {romanizer.rtoa('MMMM');}
        expect(bad).to.throw(SyntaxError);
    });
    it('should throw syntax error given LL', function() {
        function bad() {romanizer.rtoa('LL');}
        expect(bad).to.throw(SyntaxError);
    });
    it('should throw syntax error given XM', function() {
        function bad() {romanizer.rtoa('MMMM');}
        expect(bad).to.throw(SyntaxError);
    });
    it('should throw syntax error given IC', function() {
        function bad() {romanizer.rtoa('IC');}
        expect(bad).to.throw(SyntaxError);
    });
    it('should throw syntax error given XXC', function() {
        function bad() {romanizer.rtoa('XXC');}
        expect(bad).to.throw(SyntaxError);
    });
    it('should throw syntax error given LC', function() {
        function bad() {romanizer.rtoa('LC');}
        expect(bad).to.throw(SyntaxError);
    });
    // subtract then try to add back
    it('should throw syntax error given MCMC', function() {
        function bad() {romanizer.rtoa('MCMC');}
        expect(bad).to.throw(SyntaxError);
    });



    // test cases from the kata page
    it('should return 1 iven I', function () {
        var r = romanizer.rtoa('I');
        expect(r).to.be.equal(1);
    });
    it('should return 3 given III', function () {
        var r = romanizer.rtoa('III');
        expect(r).to.be.equal(3);
    });
    it('should return 9 given IX', function () {
        var r = romanizer.rtoa('IX');
        expect(r).to.be.equal(9);
    });
    it('should return 1966 given MLXVI', function () {
        var r = romanizer.rtoa('MLXVI');
        expect(r).to.be.equal(1066);
    });
    it('should return 1989 given MCMLXXXIX', function () {
        var r = romanizer.rtoa('MCMLXXXIX');
        expect(r).to.be.equal(1989);
    });
});
