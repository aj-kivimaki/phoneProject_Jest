# Test cases for getAllNumbersByType(type)

## **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type. If no number of given type is found, an empty array `[]` is returned.

If a person have multiple numbers of same type, each of them will be in its own object.

If a parameter is missing, the method throws an exception `'missing parameter'`.

The format of the returned object in the array is:

```json
{
  "firstname": "",
  "lastname": "",
  "number": {
    "type": "",
    "tel": ""
  }
}
```

#### Example

`type` work

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": {
      "type": "work",
      "tel": "555-8472643"
    }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": {
      "type": "work",
      "tel": "044-8223334"
    }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": {
      "type": "work",
      "tel": "044-3337465"
    }
  }
]
```

`type` mobile

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": {
      "type": "mobile",
      "number": "045-1129847"
    }
  }
]
```

All tests use default data

### Test 1. type work

returns

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": {
      "type": "work",
      "tel": "555-8472643"
    }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": {
      "type": "work",
      "tel": "044-8223334"
    }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": {
      "type": "work",
      "tel": "044-3337465"
    }
  }
]
```

### Test 2. type mobile

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": {
      "type": "mobile",
      "tel": "045-1129847"
    }
  }
]
```

### Test 3. type x

returns `[]`

### Test 4. missing parameter

if parameter is missing, throws an exception `'missing parameter'`
