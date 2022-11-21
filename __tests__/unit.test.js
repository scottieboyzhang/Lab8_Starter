// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber', () => {
    expect(functions.isPhoneNumber("619-494-6775")).toBe(true);
    expect(functions.isPhoneNumber("+1(619)494-6775")).toBe(true);
    expect(functions.isPhoneNumber("123456789")).toBe(false);
    expect(functions.isPhoneNumber("abc1234567")).toBe(false);
});

test('isEmail', () => {
    expect(functions.isEmail("scottie@gmail.com")).toBe(true);
    expect(functions.isEmail("asdf@ucsd.edu")).toBe(true);
    expect(functions.isEmail("notaemail")).toBe(false);
    expect(functions.isEmail("notamail.com")).toBe(false);
});

test('isStrongPassword', () => {
    expect(functions.isStrongPassword("StrongPassword")).toBe(true);
    expect(functions.isStrongPassword("scottieboy05")).toBe(true);
    expect(functions.isStrongPassword("111")).toBe(false);
    expect(functions.isStrongPassword("1zadbsh")).toBe(false);
});

test('isDate', () => {
    expect(functions.isDate("10/11/1999")).toBe(true);
    expect(functions.isDate("1/1/2023")).toBe(true);
    expect(functions.isDate("2023/1/1")).toBe(false);
    expect(functions.isDate("01/01/23")).toBe(false);
});

test('isHexColor', () => {
    expect(functions.isHexColor("#FFFFFF")).toBe(true);
    expect(functions.isHexColor("#000000")).toBe(true);
    expect(functions.isHexColor("#GGGGGG")).toBe(false);
    expect(functions.isHexColor("#FFFFFG")).toBe(false);
});