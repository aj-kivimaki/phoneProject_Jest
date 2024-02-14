# Test cases for getName

## **getName(number)**

The method searches the given phone number from the registry. If the number is found, method returns the owner of that number as an object:

```json
{ "firstname": "", "lastname": "" }
```

If no phone with given number is found, the method return `null`.
If the parameter is missing, `null` is also returned.

All tests use default data

### Test 1. number found

testData:

```shell
"044-8223334"
```

returns

```json
{ "firstname": "Leila", "lastname": "Hökki" }
```

### Test 2. number found #2

testData:

```shell
"045-1129847"
```

returns

```json
{ "firstname": "Matt", "lastname": "River" }
```

### Test 3. wrong number

testData:

```shell
"0000"
```

returns `null`

### Test 4. missing parameter

returns `null`
