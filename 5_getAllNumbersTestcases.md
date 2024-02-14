# Test cases for getAllNumbers

## **getAllNumbers()**

Returns all phone numbers in an array, each as a person object of form:

```json
{ "firstname": "", "lastname": "", "phones": [] }
```

The phone object in phones array is of form:

```json
{ "type": "", "number": "" }
```

If a person does not have a phone (the phone field is an empty array `[]`), the person is not added into the result array.
If all persons are missing, an empty array `[]` is returned.

### Test 1. testing with default data

returns same array that was used to create the register

### Test 2. some phones missing

testData :

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "55-1234567" },
      { "type": "work", "number": "555-8472643" },
      { "type": "work", "number": "044-8223334" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  }
]
```

returns:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "55-1234567" },
      { "type": "work", "number": "555-8472643" },
      { "type": "work", "number": "044-8223334" }
    ]
  }
]
```

### Test 3. some phones missing #2

testData :

```json
[
  {
    "firstname": "Vera",
    "lastname": "Smith",
    "phones": []
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "55-1234567" },
      { "type": "work", "number": "555-8472643" },
      { "type": "work", "number": "044-8223334" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  },
  {
    "firstname": "Mary",
    "lastname": "Jones",
    "phones": [{ "type": "home", "number": "918273645" }]
  }
]
```

returns:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "55-1234567" },
      { "type": "work", "number": "555-8472643" },
      { "type": "work", "number": "044-8223334" }
    ]
  },
  {
    "firstname": "Mary",
    "lastname": "Jones",
    "phones": [{ "type": "home", "number": "918273645" }]
  }
]
```

### Test 4. all phones missing

testData:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  }
]
```

returns `[]`

### Test 5. all persons missing

testData: `[]`

return `[]`
