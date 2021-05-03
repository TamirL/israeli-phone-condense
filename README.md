# normalize-israeli-phone
This package removes all decorations from an Israeli phone number to keep is in a consistant format

## Examples
### Removes international prefix
+972521234567 --> 0521234567

### Remove Irrelevant characters
(052) 1234567 --> 0521234567

## How to use
the module is a function that you invoke with the desired phone number

### In code
in ES5
```JavaScript
var normalizeIsraeliPhone = require("normalize-israeli-phone");

var normalized = normalizeIsraeliPhone("+97252-1234567"); 
// normalized = "0521234567"
```

