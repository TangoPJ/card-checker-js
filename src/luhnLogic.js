"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLuhnDigits = exports.luhnValidate = exports.luhnCalculate = exports.luhnChecksum = void 0;
var luhnChecksum = function (code) {
    var length = code.length;
    var parity = length % 2;
    var sum = 0;
    for (var i = length - 1; i >= 0; i--) {
        var d = parseInt(code.charAt(i));
        if (i % 2 === parity) {
            d *= 2;
        }
        if (d > 9) {
            d -= 9;
        }
        sum += d;
    }
    return sum % 10;
};
exports.luhnChecksum = luhnChecksum;
var luhnCalculate = function (partcode) {
    var checksum = (0, exports.luhnChecksum)(partcode + "0");
    return checksum === 0 ? 0 : 10 - checksum;
};
exports.luhnCalculate = luhnCalculate;
var luhnValidate = function (code) {
    return (0, exports.luhnChecksum)(code) === 0;
};
exports.luhnValidate = luhnValidate;
var generateLuhnDigits = function (length) {
    if (length <= 1) {
        throw new Error("Length must be greater than 1 to include the check digit.");
    }
    var baseDigits = [];
    for (var i = 0; i < length - 1; i++) {
        baseDigits.push(Math.floor(Math.random() * 10));
    }
    var checkdigit = (0, exports.luhnCalculate)(baseDigits.join(""));
    return baseDigits.join("") + checkdigit;
};
exports.generateLuhnDigits = generateLuhnDigits;
console.log((0, exports.generateLuhnDigits)(16));
