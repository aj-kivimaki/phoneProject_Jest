# Phone API

## Data

Data will be in a json file. A person can be in the data array only once. Names are unique so for example `Leila Hökki` can't exist twice in the json data. Phone number is also unique and can be only once in the json data. We also assume that the json file is valid and no field is missing. An empty phones array is ok also all persons may be missing so the data in on empty array.

### phones.json

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
    "phones": [
      { "type": "home", "number": "06-3384923" },
      { "type": "mobile", "number": "045-1129847" },
      { "type": "work", "number": "044-3337465" }
    ]
  }
]
```

## Class PhoneRegister

### **Constructor(data)**

Phones json array is passed in as a parameter `data`. If parameter is missing, throws an exception `'phone data missing'`.

### **getTypes()**

Returns all phone types in an array. The type is added to the result array only once in the order they are found. If there are no phones or no persons, an empty array `[]` is returned. Type may be an empty string.

```json
["home", "work", "mobile"]
```

### **getPersonsNumbersByType(firstname, lastname, type)**

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

### **getAllNumbersByType(type)**

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

### **getAllNumbers()**

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

### **getName(number)**

The method searches the given phone number from the registry. If the number is found, method returns the owner of that number as an object:

```json
{ "firstname": "", "lastname": "" }
```

If no phone with given number is found, the method return `null`.
If the parameter is missing, `null` is also returned.
