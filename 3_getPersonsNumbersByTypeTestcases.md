# Test cases for getPersonsNumbersByType

## **getPersonsNumbersByType(firstname, lastname, type)**

Method returns an array of phone numbers of guven `type` belonging to given person with `firstname` and `lastname`.

- `Leila Hökki` and `work`:

```json
["555-8472643", "044-8223334"]
```

- `Matt River` and `mobile`:

```json
["045-1129847"]
```

If no person with given name is found, an empty array `[]` is returned.
If no number withe given type is found, an empty array `[]` is returned.
If at least one parameter is missing, an exception `'missing parameter'` is thrown.

### Test 1. Leila Hökki and work

parameters:

- firstname = 'Leila'
- lastname = 'Hökki'
- type = 'work'

expect to return

```json
["555-8472643", "044-8223334"]
```

### Test 2. Matt River and mobile

returns

```json
["045-1129847"]
```

### Test 3. Wrong name or type

test with values:

x (wrong)

- firstname Matt, lastanem River, type x
- firstname Matt, lastname x, type mobile
- firstname x, lastname River, type mobile

return `[]`

### Test 4. Missing parameter

1 parameter missing: `Matt`, `River`
2 parameters missing: `Matt`
All parameters missing: -

throws an exception
`'missing parameter'`

### Test 5. With an empty string

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

Testing with Leila Hökki and type ""

returns

```json
["555-8472643"]
```
