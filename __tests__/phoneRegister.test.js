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
    const testData = phones;
    const expectedResult = ["home", "work", "mobile"];
    const register = new PhoneRegister(testData);
    expect(register.getTypes()).toEqual(expectedResult);
  });

  test("Test 2: some type will be an empty string", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [
          { type: "home", number: "55-1234567" },
          { type: "", number: "555-8472643" },
          { type: "work", number: "044-8223334" },
        ],
      },
      {
        firstname: "Matt",
        lastname: "River",
        phones: [{ type: "work", number: "044-3337465" }],
      },
    ];

    const expectedResult = ["home", "", "work"];
    const register = new PhoneRegister(testData);
    expect(register.getTypes()).toEqual(expectedResult);
  });

  test("Test 3: only home phones", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [
          { type: "home", number: "55-1234567" },
          { type: "home", number: "044-8223334" },
        ],
      },
      {
        firstname: "Matt",
        lastname: "River",
        phones: [{ type: "home", number: "044-3337465" }],
      },
    ];

    const expectedResult = ["home"];
    const register = new PhoneRegister(testData);
    expect(register.getTypes()).toEqual(expectedResult);
  });

  test("Test 4: no phones found", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [],
      },
      {
        firstname: "Matt",
        lastname: "River",
        phones: [],
      },
    ];

    const expectedResult = [];
    const register = new PhoneRegister(testData);
    expect(register.getTypes()).toEqual(expectedResult);
  });

  test("Test 5: no persons found", () => {
    const testData = [];
    const expectedResult = [];
    const register = new PhoneRegister(testData);
    expect(register.getTypes()).toEqual(expectedResult);
  });
});

describe("Test cases for getPersonsNumbersByType", () => {
  const testData = phones;
  const register = new PhoneRegister(testData);

  describe("Tests 1. - 3.", () => {
    const testValues = [
      ["Leila", "Hökki", "work", ["555-8472643", "044-8223334"]],
      ["Matt", "River", "mobile", ["045-1129847"]],
      ["Matt", "River", "x", []],
      ["Matt", "x", "mobile", []],
      ["x", "River", "mobile", []],
    ];

    test.each(testValues)(
      "%s %s %s returns %s",
      (firstname, lastname, type, expectedResult) => {
        expect(
          register.getPersonsNumbersByType(firstname, lastname, type)
        ).toEqual(expectedResult);
      }
    );
  });

  describe("Test 4. Missing parameter", () => {
    test("1 parameter missing", () => {
      expect(() => register.getPersonsNumbersByType("Matt", "River")).toThrow(
        "missing parameter"
      );
    });

    test("2 parameters missing", () => {
      expect(() => register.getPersonsNumbersByType("Matt")).toThrow(
        "missing parameter"
      );
    });

    test("All parameters missing", () => {
      expect(() => register.getPersonsNumbersByType()).toThrow(
        "missing parameter"
      );
    });
  });

  describe("Test 5. With an empty string", () => {
    const modifiedData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [
          { type: "home", number: "55-1234567" },
          { type: "", number: "555-8472643" },
          { type: "work", number: "044-8223334" },
        ],
      },
      {
        firstname: "Matt",
        lastname: "River",
        phones: [{ type: "work", number: "044-3337465" }],
      },
    ];

    const modifiedRegister = new PhoneRegister(modifiedData);

    test("Leila Hökki and type ''", () => {
      expect(
        modifiedRegister.getPersonsNumbersByType("Leila", "Hökki", "")
      ).toEqual(["555-8472643"]);
    });
  });
});
