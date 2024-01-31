# Test cases for getTypes

## **getTypes()**

Returns all phone types in an array. The type is added to the result array only once in the order they are found. If there are no phones or no persons, an empty array `[]` is returned. Type may be an empty string.

```json
["home", "work", "mobile"]
```

### Test 1: get types from default data

expect to return

```json
["home", "work", "mobile"]
```

### Test 2: some type will be an empty string

Modified data:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "55-1234567" },
      { "type": "", "number": "555-8472643" },
      { "type": "work", "number": "044-8223334" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [{ "type": "work", "number": "044-3337465" }]
  }
]
```

expect to return

```json
["home", "", "work"]
```

### Test 3: only home phones

Modified data:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "55-1234567" },
      { "type": "home", "number": "044-8223334" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [{ "type": "home", "number": "044-3337465" }]
  }
]
```

expect to return

```json
["home"]
```

### Test 4: no phones found

Modified data:

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

### Test 5: no persons found

Testdata is `[]`

returns `[]`
