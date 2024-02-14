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

  describe("Test cases for getAllNumbersByType", () => {
    const register = new PhoneRegister(phones);

    test("Test 1. type work", () => {
      const result = [
        {
          firstname: "Leila",
          lastname: "Hökki",
          number: {
            type: "work",
            tel: "555-8472643",
          },
        },
        {
          firstname: "Leila",
          lastname: "Hökki",
          number: {
            type: "work",
            tel: "044-8223334",
          },
        },
        {
          firstname: "Matt",
          lastname: "River",
          number: {
            type: "work",
            tel: "044-3337465",
          },
        },
      ];

      expect(register.getAllNumbersByType("work")).toEqual(result);
    });

    test("Test 2. type mobile", () => {
      const result = [
        {
          firstname: "Matt",
          lastname: "River",
          number: {
            type: "mobile",
            tel: "045-1129847",
          },
        },
      ];

      expect(register.getAllNumbersByType("mobile")).toEqual(result);
    });

    test("Test 3. type x", () => {
      expect(register.getAllNumbersByType("x")).toEqual([]);
    });

    test("Test 4. missing parameter", () => {
      expect(() => register.getAllNumbersByType()).toThrow("missing parameter");
    });
  });

  describe("Test cases for getAllNumbers", () => {
    test("Test 1. testing with default data", () => {
      const register = new PhoneRegister(phones);
      expect(register.getAllNumbers()).toEqual(phones);
    });

    test("Test 2. some phones missing", () => {
      const testData = [
        {
          firstname: "Leila",
          lastname: "Hökki",
          phones: [
            { type: "home", number: "55-1234567" },
            { type: "work", number: "555-8472643" },
            { type: "work", number: "044-8223334" },
          ],
        },
        {
          firstname: "Matt",
          lastname: "River",
          phones: [],
        },
      ];

      const result = [
        {
          firstname: "Leila",
          lastname: "Hökki",
          phones: [
            { type: "home", number: "55-1234567" },
            { type: "work", number: "555-8472643" },
            { type: "work", number: "044-8223334" },
          ],
        },
      ];

      const register = new PhoneRegister(testData);
      expect(register.getAllNumbers()).toEqual(result);
    });

    test("Test 3. some phones missing #2", () => {
      const testData = [
        {
          firstname: "Vera",
          lastname: "Smith",
          phones: [],
        },
        {
          firstname: "Leila",
          lastname: "Hökki",
          phones: [
            { type: "home", number: "55-1234567" },
            { type: "work", number: "555-8472643" },
            { type: "work", number: "044-8223334" },
          ],
        },
        {
          firstname: "Matt",
          lastname: "River",
          phones: [],
        },
        {
          firstname: "Mary",
          lastname: "Jones",
          phones: [{ type: "home", number: "918273645" }],
        },
      ];

      const result = [
        {
          firstname: "Leila",
          lastname: "Hökki",
          phones: [
            { type: "home", number: "55-1234567" },
            { type: "work", number: "555-8472643" },
            { type: "work", number: "044-8223334" },
          ],
        },
        {
          firstname: "Mary",
          lastname: "Jones",
          phones: [{ type: "home", number: "918273645" }],
        },
      ];

      const register = new PhoneRegister(testData);
      expect(register.getAllNumbers()).toEqual(result);
    });

    test("Test 4. all phones missing", () => {
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

      const result = [];

      const register = new PhoneRegister(testData);
      expect(register.getAllNumbers()).toEqual(result);
    });

    test("Test 5. all persons missing", () => {
      const testData = [];
      const result = [];

      const register = new PhoneRegister(testData);
      expect(register.getAllNumbers()).toEqual(result);
    });
  });

  describe("Test cases for getName", () => {
    const register = new PhoneRegister(phones);

    describe("Tests 1. - 2. number found", () => {
      const testData = [
        ["044-8223334", { firstname: "Leila", lastname: "Hökki" }],
        ["045-1129847", { firstname: "Matt", lastname: "River" }],
      ];

      test.each(testData)("number %s returns %p", (number, result) => {
        expect(register.getName(number)).toEqual(result);
      });
    });

    test("Test 3. wrong number", () => {
      expect(register.getName("0000")).toBeNull();
    });

    test("Test 4. missing parameter", () => {
      expect(register.getName()).toBeNull();
    });
  });
});
