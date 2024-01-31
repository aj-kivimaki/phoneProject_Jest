"use strict";

const PhoneRegister = require("../phoneRegister");
const phones = require("../phones.json");

describe("Test cases for the constructor", () => {
  test("Test 1: missing parameter throws an exception", () => {
    expect(() => new PhoneRegister()).toThrow("phone data missing");
  });
});

describe("Test cases for getTypes", () => {
  test("Test 1: get types from default data", () => {
    const register = new PhoneRegister(phones);
    expect(register.getTypes()).toEqual(["home", "work", "mobile"]);
  });
  /* test("Test 2: some type will be an empty string", () => {
    const register = new PhoneRegister(phones);
    expect(register.getTypes()).toEqual([""]);
  }); */
});
